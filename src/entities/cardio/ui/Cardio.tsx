import { useEffect, useState } from 'react';
import { Cascader, InputNumber, TimePicker, Typography } from 'antd';

import { useAppDispatch } from '@store/hooks';
import { setCardio } from '../../../shared/lib/slices';
import { cardioCascaderProps, timeParse } from '../model/cardio';

import type { CardioType } from '../../../shared/types/workout';

import './Cardio.scss';

export function Cardio() {
    const dispatch = useAppDispatch();

    const [cardioExercise, setCardioExercise] = useState<CardioType[] | null | undefined>(null);
    const [time, setTime] = useState<string>('');
    const [rhytm, setRhytm] = useState<number | null>(null);

    const { Title } = Typography;

    useEffect(() => {
        dispatch(setCardio({
            name: ((cardioExercise === undefined) || (cardioExercise === null)) ? null : cardioExercise[0],
            time: time,
            rhythm: rhytm
        }))
    }, [cardioExercise, time, rhytm]);

    return (
        <div className="cardio">
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
    )
}
