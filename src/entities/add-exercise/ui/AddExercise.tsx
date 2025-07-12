import { useState } from 'react';
import { Button, Cascader, InputNumber, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { Preview } from '../../../shared/ui/preview';

import { useAppDispatch, useAppSelector } from '../../../app/store';
import { addExersice, exercisesCascaderProps, setTimes, setWeight, attempts, timesValue } from '../model/add-exercise';

import './AddExercise.scss';

export function AddExercise() {
    const dispatch = useAppDispatch();
    const exerciseArray = useAppSelector((state) => (state.exercise));

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

    const [exercise, setExercise] = useState<string[] | null | undefined>(null);

    const { Text, Title } = Typography;

    return (
        <div className="addExercise">
            <Title level={4} className='addExercise'>Силовые упражнения</Title>
            <Cascader
                maxTagCount={2}
                options={exercisesCascaderProps.options}
                placeholder={exercisesCascaderProps.placeholder}
                onChange={(value) => { setExercise(value) }} />
            {attempts.map((num) => (
                <div className="attempt" key={num}>
                    <Text keyboard={true}>{`Подход ${num}`}</Text>
                    <InputNumber
                        className='times'
                        min={1}
                        max={100}
                        placeholder='Количество повторений'
                        disabled={(timesValue(times1, times2, times3, times4, times5, num) === 100)}
                        suffix={(timesValue(times1, times2, times3, times4, times5, num) === 100) && <Text keyboard>max</Text>}
                        addonAfter={<Button danger onClick={() => { (timesValue(times1, times2, times3, times4, times5, num) !== 100) ? setTimes(num, setTimes1, setTimes2, setTimes3, setTimes4, setTimes5)(100) : setTimes(num, setTimes1, setTimes2, setTimes3, setTimes4, setTimes5)(null) }}>max</Button>}
                        onChange={(value) => { setTimes(num, setTimes1, setTimes2, setTimes3, setTimes4, setTimes5)(value) }} />
                    <InputNumber
                        className='weight'
                        min={0}
                        max={500}
                        placeholder='Вес'
                        onChange={(value) => { setWeight(num, setWeight1, setWeight2, setWeight3, setWeight4, setWeight5)(value) }} />
                </div>
            ))}
            <Preview exercise={exercise} />
            <Button
                icon={<PlusOutlined />}
                color='primary'
                variant='solid'
                className='addExercise'
                onClick={() => { addExersice(exerciseArray, dispatch, exercise, times1, times2, times3, times4, times5, weight1, weight2, weight3, weight4, weight5) }}>Добавить упражнение</Button>
        </div>
    )
}
