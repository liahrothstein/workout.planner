import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TrainingType, MuscleGroups, Cardio, Notes, ExercisesTable } from '@widgets/index';

import { workoutParse } from '../model/workout';

import type { Workout } from '../../../shared/types/workout';

import './Workout.scss';

export function Workout() {
    const [searchParams] = useSearchParams();

    const [workout, setWorkout] = useState<Workout>(workoutParse(searchParams));

    return (
        <div className="workoutWrapper">
            <div className='workout'>
                <TrainingType workout={workout} />
                <MuscleGroups muscleGroups={workout.muscleGroups} />
                <ExercisesTable exercises={workout.exercises} />
                {(workout.cardioExercises.name !== null) && <Cardio cardioExercises={workout.cardioExercises} />}
                {(workout.notes !== '') && <Notes notes={workout.notes} />}
            </div>
        </div>
    )
}
