import './MuscleGroups.scss';

import { muscleGroupCheckboxes } from '@constants/muscle-groups';
import { setMuscleGroups } from '@slices/muscle-groups-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Checkbox, Typography } from 'antd';
import { useEffect, useState } from 'react';

import {
  setBack,
  setBiceps,
  setCalf,
  setChest,
  setForearms,
  setLegs,
  setPress,
  setShoulders,
  setTriceps,
} from '../model/muscle-groups';

export function MuscleGroups() {
  const dispatch = useAppDispatch();
  const muscleGroups = useAppSelector((state) => state.muscleGroups);

  const [isShoulders, setIsShoulders] = useState<boolean>(false);
  const [isBack, setIsBack] = useState<boolean>(false);
  const [isChest, setIsChest] = useState<boolean>(false);
  const [isBiceps, setIsBiceps] = useState<boolean>(false);
  const [isLegs, setIsLegs] = useState<boolean>(false);
  const [isTriceps, setIsTriceps] = useState<boolean>(false);
  const [isPress, setIsPress] = useState<boolean>(false);
  const [isForearms, setIsForearms] = useState<boolean>(false);
  const [isCalf, setIsCalf] = useState<boolean>(false);

  const { Title } = Typography;

  useEffect(() => {
    dispatch(setMuscleGroups(setShoulders(isShoulders, muscleGroups)));
  }, [isShoulders]);
  useEffect(() => {
    dispatch(setMuscleGroups(setBack(isBack, muscleGroups)));
  }, [isBack]);
  useEffect(() => {
    dispatch(setMuscleGroups(setBiceps(isBiceps, muscleGroups)));
  }, [isBiceps]);
  useEffect(() => {
    dispatch(setMuscleGroups(setChest(isChest, muscleGroups)));
  }, [isChest]);
  useEffect(() => {
    dispatch(setMuscleGroups(setLegs(isLegs, muscleGroups)));
  }, [isLegs]);
  useEffect(() => {
    dispatch(setMuscleGroups(setTriceps(isTriceps, muscleGroups)));
  }, [isTriceps]);
  useEffect(() => {
    dispatch(setMuscleGroups(setPress(isPress, muscleGroups)));
  }, [isPress]);
  useEffect(() => {
    dispatch(setMuscleGroups(setForearms(isForearms, muscleGroups)));
  }, [isForearms]);
  useEffect(() => {
    dispatch(setMuscleGroups(setCalf(isCalf, muscleGroups)));
  }, [isCalf]);

  return (
    <>
      <Title level={4} className="muscleGroups">
        Группы мышц
      </Title>
      <div className="muscleGroups">
        {muscleGroupCheckboxes(
          setIsShoulders,
          setIsBack,
          setIsChest,
          setIsBiceps,
          setIsLegs,
          setIsTriceps,
          setIsPress,
          setIsForearms,
          setIsCalf,
        ).map((msclGrp) => (
          <Checkbox
            key={msclGrp.muscleGroup}
            onChange={(e) => {
              msclGrp.dispatch(e.target.checked);
            }}
          >
            {msclGrp.muscleGroup}
          </Checkbox>
        ))}
      </div>
    </>
  );
}
