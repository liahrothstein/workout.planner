import { Cascader } from 'antd';

import { AddExercise } from '@entities/add-exercise';
import { Cardio } from '@entities/cardio';
import { PreliminaryExercise } from '@entities/preliminary-exercise';

import { useAppSelector } from '@store/hooks';
import { trainingTypeCascaderProps } from '../model/fill-data';

import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';

import './FillData.scss';

export function FillData() {
    const exercises: ExerciseWithAttmepts[] = useAppSelector((state) => (state.exercise));
    console.log(exercises)

    return (
        <>
            <Cascader
                options={trainingTypeCascaderProps.options}
                placeholder={trainingTypeCascaderProps.placeholder} />
            <Cardio />
            <AddExercise />
            <div className="preliminaryExercises">
                {exercises.map((exercise, index) => (
                    <PreliminaryExercise
                        key={index + 5}
                        exercise={exercise.exercise}
                        attempts={exercise.attempts}
                        index={index} />
                ))}
            </div>
        </>
    )
}
