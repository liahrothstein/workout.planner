import { exercises } from '@constants/exercises';
import type { SetTimes, SetWeight, TrainingTypeCascaderProps } from '../../../shared/types/cascader';
import type { ExerciseArray } from '../../../shared/types/exercise';
import type { Attempt } from '../../../shared/types/workout';

function exercisesChildren(array: string[]): any {
    let tempArray: any = [];

    array.forEach((element) => {
        tempArray.push({ value: element, label: element })
    });

    return (tempArray)
};

function exerciseArray(array: ExerciseArray[]) {
    let tempArray: any = [];

    array.forEach((element) => {
        tempArray.push({
            value: element.muscleGroup,
            label: element.muscleGroup,
            children: exercisesChildren(element.names)
        })
    });

    return (tempArray)
}

const exercisesOptions: any[] = exerciseArray(exercises);

export const exercisesCascaderProps: TrainingTypeCascaderProps = {
    options: exercisesOptions,
    placeholder: 'Упражнение'
};

export function setTimes(
    num: number,
    setTimes1: SetTimes,
    setTimes2: SetTimes,
    setTimes3: SetTimes,
    setTimes4: SetTimes,
    setTimes5: SetTimes,
): SetTimes {
    switch (num) {
        case 1:
            return (setTimes1);
            break;
        case 2:
            return (setTimes2);
            break;
        case 3:
            return (setTimes3);
            break;
        case 4:
            return (setTimes4);
            break;
        default:
            return (setTimes5);
    }
};

export function setWeight(
    num: number,
    setWeight1: SetWeight,
    setWeight2: SetWeight,
    setWeight3: SetWeight,
    setWeight4: SetWeight,
    setWeight5: SetWeight,
): SetWeight {
    switch (num) {
        case 1:
            return (setWeight1);
            break;
        case 2:
            return (setWeight2);
            break;
        case 3:
            return (setWeight3);
            break;
        case 4:
            return (setWeight4);
            break;
        default:
            return (setWeight5);
    }
};

export function pushAttempt(attempts: Attempt[], times: number | null, weight: number | null, num: number): Attempt[] {
    let attempt: Attempt = {
        number: (num + 1),
        times: null,
        weight: null
    };
    let array: Attempt[] = attempts;
    
    if (times) {
        attempt.times = times
    }
    if (weight) {
        attempt.weight = weight
    }
    array[num] = attempt;

    return (array)
}