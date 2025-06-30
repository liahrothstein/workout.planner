import { useEffect, useState } from 'react';
import { Cascader } from 'antd';

import { AddExercise } from '@entities/add-exercise';
import { Cardio } from '@entities/cardio';
import { PreliminaryExercise } from '@entities/preliminary-exercise';
import { MuscleGroups } from '@entities/muscle-groups';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { ejectTrainingType, trainingTypeCascaderProps } from '../model/fill-data';
import { editTrainingType } from '../../../shared/lib/slices';

import type { TrainingType } from '../../../shared/types/workout';
import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';

import './FillData.scss';

export function FillData() {
    const exercises: ExerciseWithAttmepts[] = useAppSelector((state) => (state.exercise));
    const dispatch = useAppDispatch();

    const [trainingTypeArray, setTrainingTypeArray] = useState<TrainingType[] | undefined | null>(null);

    useEffect(() => {
        dispatch(editTrainingType(ejectTrainingType(trainingTypeArray)))
    }, [trainingTypeArray]);

    return (
        <>
            <Cascader
                options={trainingTypeCascaderProps.options}
                placeholder={trainingTypeCascaderProps.placeholder}
                onChange={(type) => { setTrainingTypeArray(type) }} />
            <MuscleGroups />
            <Cardio />
            <AddExercise />
            <div className="preliminaryExercises">
                {exercises.map((exercise, index, exercises) => (
                    <PreliminaryExercise
                        key={index + 5}
                        exercise={exercise.exercise}
                        attempts={exercise.attempts}
                        index={index}
                        exercises={exercises} />
                ))}
            </div>
        </>
    )
}
