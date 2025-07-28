import { useState } from 'react';
import { Button, Cascader, InputNumber, TimePicker, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setCardio } from '@slices/cardio-slice';
import { cardioCascaderProps, timeParse } from '../model/cardio';

import type { CardioType } from '../../../shared/types/workout';

import './Cardio.scss';

export function Cardio() {
    const dispatch = useAppDispatch();
    const cardio = useAppSelector((state) => (state.cardio));

    const [cardioExercise, setCardioExercise] = useState<CardioType[] | null | undefined>(null);
    const [time, setTime] = useState<string>('');
    const [rhytm, setRhytm] = useState<number | null>(null);

    const { Title } = Typography;

    return (
        <div className="cardio">
            <div>
                <Title level={4} className='cardio'>Кардио упражнения</Title>
                <Cascader
                    className='cardioType'
                    options={cardioCascaderProps.options}
                    placeholder={cardioCascaderProps.placeholder}
                    onChange={(e) => { setCardioExercise(e) }} />
                <TimePicker
                    className='time'
                    format='mm:ss'
                    placeholder='Время'
                    onChange={(e) => { (e !== null) ? setTime(timeParse(e.minute(), e.second())) : setTime('') }} />
                <InputNumber
                    className='rhytm'
                    min={0.1}
                    max={100}
                    placeholder='Ритм'
                    onChange={(e) => { setRhytm(e) }} />
            </div>
            <Button
                icon={<PlusOutlined />}
                color='purple'
                variant='solid'
                onClick={() => { dispatch(setCardio([...cardio, { name: cardioExercise, time: time, rhythm: rhytm }])) }}
                className='cardio'>Добавить упражнение</Button>
        </div>
    )
}
