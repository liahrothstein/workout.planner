import './Cardio.scss';

import { DownOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons';
import { setCardio } from '@slices/cardio-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Button, Cascader, InputNumber, TimePicker, Typography } from 'antd';
import { useState } from 'react';

import { cardioCascaderProps, timeParse } from '../model/cardio';

export function Cardio() {
  const dispatch = useAppDispatch();
  const cardio = useAppSelector((state) => state.cardio);

  const [cardioExercise, setCardioExercise] = useState<string[] | null | undefined>(null);
  const [time, setTime] = useState<string>('');
  const [rhytm, setRhytm] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { Title } = Typography;

  return (
    <div className="cardio">
      <div className="titleWithButton">
        <Button
          icon={isOpen ? <DownOutlined /> : <RightOutlined />}
          variant="text"
          color="default"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Title level={4} className="cardio">
          Кардио упражнения
        </Title>
      </div>
      {isOpen && (
        <>
          <div>
            <Cascader
              className="cardioType"
              options={cardioCascaderProps.options}
              placeholder={cardioCascaderProps.placeholder}
              onChange={(e) => {
                setCardioExercise(e);
              }}
            />
            <TimePicker
              className="time"
              format="mm:ss"
              placeholder="Время"
              onChange={(e) => {
                e !== null ? setTime(timeParse(e.minute(), e.second())) : setTime('');
              }}
            />
            <InputNumber
              className="rhytm"
              min={0.1}
              max={100}
              placeholder="Ритм"
              onChange={(e) => {
                setRhytm(e);
              }}
            />
          </div>
          <Button
            icon={<PlusOutlined />}
            disabled={!cardioExercise}
            color="purple"
            variant="solid"
            onClick={() => {
              dispatch(setCardio([...cardio, { name: cardioExercise, time: time, rhythm: rhytm }]));
            }}
            className="cardio"
          >
            Добавить упражнение
          </Button>
        </>
      )}
    </div>
  );
}
