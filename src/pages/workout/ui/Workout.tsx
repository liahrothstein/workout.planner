import { useSearchParams } from 'react-router-dom';

import { TrainingType, MuscleGroups, Cardio, Notes, ExercisesTable } from '../../../widgets';

import { workoutParse } from '../model/workout';

import type { Workout } from '../../../shared/types/workout';

import icon from '../../../../public/gord.onfit.icon.png';

import './Workout.scss';

export function Workout() {
    const [searchParams] = useSearchParams();

    const workout: Workout = workoutParse(searchParams);

    return (
        <div className="workoutWrapper">
            <div className='workout'>
                <TrainingType workout={workout} />
                <MuscleGroups muscleGroups={workout.muscleGroups} />
                <ExercisesTable exercises={workout.exercises} />
                <Cardio cardioExercises={workout.cardioExercises} />
                <Notes notes={workout.notes} />
                <img src={icon} alt="icon" className="icon" />
            </div>
        </div>
    )
}
