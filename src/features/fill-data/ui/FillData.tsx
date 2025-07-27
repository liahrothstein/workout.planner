import { useEffect, useState } from 'react';
import { Cascader, Input, InputNumber, Typography } from 'antd';

import { MuscleGroups, PreliminaryExercise, Cardio, AddExercise, WarmUp, PreliminaryWarmUp } from '@entities/index';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { ejectTrainingType, trainingTypeCascaderProps } from '../model/fill-data';
import { editTrainingType, setNotes, setWorkout } from '@slices/index';

import type { CardioExercise, MuscleGroup, TrainingType } from '../../../shared/types/workout';
import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';

import './FillData.scss';

export function FillData() {
    const trainingType: TrainingType | string = useAppSelector((state) => (state.trainingType));
    const muscleGroups: MuscleGroup[] = useAppSelector((state) => (state.muscleGroups));
    const exercises: ExerciseWithAttmepts[] = useAppSelector((state) => (state.exercise));
    const cardioExercises: CardioExercise = useAppSelector((state) => (state.cardio));
    const notes: string = useAppSelector((state) => (state.notes));
    const warmUp = useAppSelector((state) => (state.warmUp));
    const dispatch = useAppDispatch();

    const [workoutNumber, setWorkoutNumber] = useState<number | null>(null);
    const [trainingTypeArray, setTrainingTypeArray] = useState<TrainingType[] | undefined | null>(null);

    const { TextArea } = Input;
    const { Title } = Typography;

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
            notes: notes,
            warmUp: warmUp
        }))
    }, [trainingType, muscleGroups, exercises, cardioExercises, notes, warmUp]);

    return (
        <>
            <Title level={2}>Сформировать тренировку</Title>
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
            <WarmUp />
            <AddExercise />
            <div className="preliminaryExercises">
                {(warmUp.length !== 0) && <Title level={4}>Разминка</Title>}
                {warmUp.map((element, index, array) => (
                    <PreliminaryWarmUp
                        key={index + 5}
                        index={index}
                        warmUp={element}
                        array={array} />
                ))}

                {(exercises.length !== 0) && <Title level={4}>Основные упражнения</Title>}
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
