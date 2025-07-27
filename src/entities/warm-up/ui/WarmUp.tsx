import { useState } from 'react';
import { Button, Cascader, InputNumber, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { WarmUpPreview } from '@components/warm-up-preview';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setWarmUp } from '@slices/warm-up-slice';
import { warmUpCascaderProps } from '../model/warm-up';

import './WarmUp.scss';

export function WarmUp() {
    const dispatch = useAppDispatch();
    const warmUp = useAppSelector((state) => (state.warmUp));

    const [exercise, setExercise] = useState<string[] | null | undefined>(null);
    const [attempts, setAttempts] = useState<number | null>(null);
    const [times, setTimes] = useState<number | null>(null);

    const { Title } = Typography;

    return (
        <div className='warmUp'>
            <Title level={4}>Разминка</Title>
            <Cascader
                options={warmUpCascaderProps.options}
                placeholder={warmUpCascaderProps.placeholder}
                onChange={(e) => { setExercise(e) }}
                className='warmUpType' />
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
            <WarmUpPreview exercise={exercise} />
            <Button
                icon={<PlusOutlined />}
                color='purple'
                variant='solid'
                onClick={() => { dispatch(setWarmUp([...warmUp, { exercise: exercise, attempts: attempts, times: times }])) }}
                className='warmUp'>Добавить упражнение</Button>
        </div>
    )
}
