import { useState } from 'react';
import { Button, Cascader, InputNumber, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { StretchingPreview } from '@components/stretching-preview';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { stretchingCascaderProps } from '../model/stretching';
import { setStretching } from '@slices/stretching-slice';

import './Stretching.scss';

export function Stretching() {
    const dispatch = useAppDispatch();
    const stretching = useAppSelector((state) => (state.stretching));

    const [exercise, setExercise] = useState<string[] | null | undefined>(null);
    const [attempts, setAttempts] = useState<number | null>(null);
    const [times, setTimes] = useState<number | null>(null);

    const { Title } = Typography;

    return (
        <div className='stretching'>
            <Title level={4}>Растяжка</Title>
            <div>
                <Cascader
                    onChange={(e) => { setExercise(e) }}
                    options={stretchingCascaderProps.options}
                    placeholder={stretchingCascaderProps.placeholder}
                    className='stretchingType' />
                <InputNumber
                    min={1}
                    max={100}
                    placeholder='Подходы'
                    onChange={(e) => { setAttempts(e) }}
                    className='attempts' />
                <InputNumber
                    min={1}
                    max={100}
                    placeholder='Повторения'
                    onChange={(e) => { setTimes(e) }}
                    className='times' />
            </div>
            <StretchingPreview exercise={exercise} />
            <Button
                icon={<PlusOutlined />}
                color='green'
                variant='solid'
                onClick={() => { dispatch(setStretching([...stretching, { exercise: exercise, attempts: attempts, times: times }])) }}
                className='stretching'>Добавить упражнение</Button>
        </div>
    )
}
