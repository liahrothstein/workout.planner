import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { workoutParse } from '../model/workout';

import type { Workout } from '../../../shared/types/workout';

import './Workout.scss';

export function Workout() {
    const [searchParams] = useSearchParams();

    const [workout, setWorkout] = useState<Workout>(workoutParse(searchParams));

    console.log(workout)

    return (
        <div>Workout</div>
    )
}
