import { useEffect, useState } from 'react';
import { Cascader, InputNumber, Typography } from 'antd';

import { attempts, initAttempt } from '@constants/attempts';
import { exercisesCascaderProps, pushAttempt, setTimes, setWeight } from '../model/exercise';

import type { Attempt } from '../../../shared/types/workout';

import './Exercise.scss';

export function Exercise() {
    const [times1, setTimes1] = useState<number | null>(null);
    const [times2, setTimes2] = useState<number | null>(null);
    const [times3, setTimes3] = useState<number | null>(null);
    const [times4, setTimes4] = useState<number | null>(null);
    const [times5, setTimes5] = useState<number | null>(null);

    const [weight1, setWeight1] = useState<number | null>(null);
    const [weight2, setWeight2] = useState<number | null>(null);
    const [weight3, setWeight3] = useState<number | null>(null);
    const [weight4, setWeight4] = useState<number | null>(null);
    const [weight5, setWeight5] = useState<number | null>(null);

    const [attempt, setAttempt] = useState<Attempt[]>(initAttempt);

    useEffect(() => {
        setAttempt(pushAttempt(attempt, times1, weight1, 0))
    }, [
        times1,
        weight1
    ]);
    useEffect(() => {
        setAttempt(pushAttempt(attempt, times2, weight2, 1))
    }, [
        times2,
        weight2
    ]);
    useEffect(() => {
        setAttempt(pushAttempt(attempt, times3, weight3, 2))
    }, [
        times3,
        weight3
    ]);
    useEffect(() => {
        setAttempt(pushAttempt(attempt, times4, weight4, 3))
    }, [
        times4,
        weight4
    ]);
    useEffect(() => {
        setAttempt(pushAttempt(attempt, times5, weight5, 4))
    }, [
        times5,
        weight5
    ]);

    const { Text } = Typography;

    return (
        <div className="exercise">
            <Cascader
                options={exercisesCascaderProps.options}
                placeholder={exercisesCascaderProps.placeholder} />
            {attempts.map((num) => (
                <div className="attempt" key={num}>
                    <Text keyboard={true}>{`Подход ${num}`}</Text>
                    <InputNumber
                        className='times'
                        min={1}
                        max={20}
                        placeholder='Количество повторений'
                        onChange={(e) => { setTimes(num, setTimes1, setTimes2, setTimes3, setTimes4, setTimes5)(e) }} />
                    <InputNumber
                        className='weight'
                        min={0}
                        max={500}
                        placeholder='Вес'
                        onChange={(e) => { setWeight(num, setWeight1, setWeight2, setWeight3, setWeight4, setWeight5)(e) }} />
                </div>
            ))}
        </div>
    )
}
