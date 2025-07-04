import { useEffect, useState } from 'react';
import { Checkbox, Typography } from 'antd';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setMuscleGroups } from '../../../shared/lib/slices';
import {
  setBack,
  setShoulders,
  setBiceps,
  setChest,
  setLegs,
  setTriceps
} from '../model/muscle-groups';

import { MuscleGroup } from '../../../shared/types/workout';

import './MuscleGroups.scss';

export function MuscleGroups() {
  const dispatch = useAppDispatch();
  const muscleGroups = useAppSelector((state) => (state.muscleGroups));

  const [isShoulders, setIsShoulders] = useState<boolean>(false);
  const [isBack, setIsBack] = useState<boolean>(false);
  const [isChest, setIsChest] = useState<boolean>(false);
  const [isBiceps, setIsBiceps] = useState<boolean>(false);
  const [isLegs, setIsLegs] = useState<boolean>(false);
  const [isTriceps, setIsTriceps] = useState<boolean>(false);

  const { Title } = Typography;

  useEffect(() => {
    dispatch(setMuscleGroups(setShoulders(isShoulders, muscleGroups)))
  }, [isShoulders]);
  useEffect(() => {
    dispatch(setMuscleGroups(setBack(isBack, muscleGroups)))
  }, [isBack]);
  useEffect(() => {
    dispatch(setMuscleGroups(setBiceps(isBiceps, muscleGroups)))
  }, [isBiceps]);
  useEffect(() => {
    dispatch(setMuscleGroups(setChest(isChest, muscleGroups)))
  }, [isChest]);
  useEffect(() => {
    dispatch(setMuscleGroups(setLegs(isLegs, muscleGroups)))
  }, [isLegs]);
  useEffect(() => {
    dispatch(setMuscleGroups(setTriceps(isTriceps, muscleGroups)))
  }, [isTriceps]);

  return (
    <>
      <Title level={4} className='muscleGroups'>Группы мышц</Title>
      <div className="muscleGroups">
        <Checkbox onChange={(e) => { setIsShoulders(e.target.checked) }}>{MuscleGroup.Shoulders}</Checkbox>
        <Checkbox onChange={(e) => { setIsBack(e.target.checked) }}>{MuscleGroup.Back}</Checkbox>
        <Checkbox onChange={(e) => { setIsChest(e.target.checked) }}>{MuscleGroup.Chest}</Checkbox>
        <Checkbox onChange={(e) => { setIsBiceps(e.target.checked) }}>{MuscleGroup.Biceps}</Checkbox>
        <Checkbox onChange={(e) => { setIsLegs(e.target.checked) }}>{MuscleGroup.Legs}</Checkbox>
        <Checkbox onChange={(e) => { setIsTriceps(e.target.checked) }}>{MuscleGroup.Triceps}</Checkbox>
      </div>
    </>
  )
}
