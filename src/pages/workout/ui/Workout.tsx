import { useSearchParams } from 'react-router-dom';

import {
    TrainingType,
    MuscleGroups,
    Cardio, Notes,
    ExercisesTable,
    WarmUp,
    Stretching
} from '@widgets/index';

import { workoutParse } from '../model/workout';

import type { Workout } from '../../../shared/types/workout';

import './Workout.scss';

export function Workout() {
    const [searchParams] = useSearchParams();

    const workout: Workout = workoutParse(searchParams);

    return (
        <div className="workoutWrapper">
            <div className='workout'>
                <TrainingType workout={workout} />
                <MuscleGroups muscleGroups={workout.muscleGroups} />
                {(workout.warmUp.length !== 0) && <WarmUp warmUp={workout.warmUp} />}
                <ExercisesTable exercises={workout.exercises} />
                {(workout.stretching.length !== 0) && <Stretching stretching={workout.stretching} />}
                <Cardio cardioExercises={workout.cardioExercises} />
                <Notes notes={workout.notes} />
            </div>
        </div>
    )
}
