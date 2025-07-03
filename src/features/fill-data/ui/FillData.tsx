import { useEffect, useState } from 'react';
import { Cascader, Input, InputNumber } from 'antd';

import { AddExercise } from '@entities/add-exercise';
import { Cardio } from '@entities/cardio';
import { PreliminaryExercise } from '@entities/preliminary-exercise';
import { MuscleGroups } from '@entities/muscle-groups';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { ejectTrainingType, trainingTypeCascaderProps } from '../model/fill-data';
import { editTrainingType, setNotes, setWorkout } from '../../../shared/lib/slices';

import type { CardioExercise, MuscleGroup, TrainingType } from '../../../shared/types/workout';
import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';

import './FillData.scss';

export function FillData() {
    const trainingType: TrainingType | string = useAppSelector((state) => (state.trainingType));
    const muscleGroups: MuscleGroup[] = useAppSelector((state) => (state.muscleGroups));
    const exercises: ExerciseWithAttmepts[] = useAppSelector((state) => (state.exercise));
    const cardioExercises: CardioExercise = useAppSelector((state) => (state.cardio));
    const notes: string = useAppSelector((state) => (state.notes));
    const dispatch = useAppDispatch();

    const [workoutNumber, setWorkoutNumber] = useState<number | null>(null);
    const [trainingTypeArray, setTrainingTypeArray] = useState<TrainingType[] | undefined | null>(null);

    const { TextArea } = Input;

    useEffect(() => {
        dispatch(editTrainingType(ejectTrainingType(trainingTypeArray)))
    }, [trainingTypeArray]);

    useEffect(() => {
        dispatch(setWorkout({
            trainingType: trainingType,
            workoutNumber: workoutNumber,
            muscleGroups: muscleGroups,
            exercises: exercises,
            cardioExercises: cardioExercises,
            notes: notes
        }))
    }, [trainingType, muscleGroups, exercises, cardioExercises, notes]);

    return (
        <>
            <Cascader
                className='trainingType'
                options={trainingTypeCascaderProps.options}
                placeholder={trainingTypeCascaderProps.placeholder}
                onChange={(type) => { setTrainingTypeArray(type) }} />
            <InputNumber
                className='workoutNumber'
                placeholder='№'
                min={1}
                max={100}
                onChange={(e) => { setWorkoutNumber(e) }} />
            <MuscleGroups />
            <Cardio />
            <TextArea
                className='notes'
                rows={4}
                placeholder='Заметки'
                onChange={(e) => { dispatch(setNotes(e.target.value)) }} />
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
