import { useState } from 'react';
import { Button, Cascader, InputNumber, Typography } from 'antd';
import { DownOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons';

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
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { Title } = Typography;

    return (
        <div className='warmUp'>
            <div className="titleWithButton">
                <Button
                    icon={(isOpen) ? <DownOutlined /> : <RightOutlined />}
                    variant='text'
                    color='default'
                    onClick={() => { setIsOpen(!isOpen) }} />
                <Title level={4} className='warmUp'>Разминка</Title>
            </div>
            {(isOpen) &&
                <>
                    <div>
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
                    </div>
                    <WarmUpPreview exercise={exercise} />
                    <Button
                        icon={<PlusOutlined />}
                        disabled={!exercise}
                        color='geekblue'
                        variant='solid'
                        onClick={() => { dispatch(setWarmUp([...warmUp, { exercise: exercise, attempts: attempts, times: times }])) }}
                        className='warmUp'>Добавить упражнение</Button>
                </>
            }
        </div>
    )
}
