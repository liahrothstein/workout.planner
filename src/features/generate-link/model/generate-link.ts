import LZString from 'lz-string';

import type { Workout } from '../../../shared/types/workout';

export function generateParams(workout: Workout): string {
    let objString: string = JSON.stringify(workout);
    let params: string = LZString.compressToEncodedURIComponent(objString);

    return (params)
};

export function checkChangesWorkoutData(workout: Workout, setLink: (link: string) => void, params: string): void {
    if (workout.exercises.length === 0) {
        setLink('');
    } else {
        setLink(`https://liahrothstein.github.io/workout.planner/#/workout/?workout=${params}`)
    }
};