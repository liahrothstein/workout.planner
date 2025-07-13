import { exercises } from '../../../shared/consts/exercises';
import { editExercise } from '../../../shared/lib/slices';

import type { SetTimes, SetWeight, ExerciseCascaderProps } from '../../../shared/types/cascader';
import type { ExerciseArray, ExerciseWithAttmepts } from '../../../shared/types/exercise';
import type { Attempt } from '../../../shared/types/workout';
import type { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

export const attempts: number[] = [1, 2, 3, 4, 5];

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

export const exercisesCascaderProps: ExerciseCascaderProps = {
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

export function addExersice(
    exerciseArray: ExerciseWithAttmepts[],
    dispatch: ThunkDispatch<{ exercise: any; }, undefined, UnknownAction> & Dispatch<UnknownAction>,
    exercise: string[] | null | undefined,
    times1: number | null,
    times2: number | null,
    times3: number | null,
    times4: number | null,
    times5: number | null,
    weight1: number | null,
    weight2: number | null,
    weight3: number | null,
    weight4: number | null,
    weight5: number | null
): void {
    function checkNumberTimes(number: number | null): number | null | 'max' {
        if ((number === 0) || (number === null)) {
            return (null)
        } else {
            if (number === 100) {
                return ('max')
            } else {
                return (number)
            }
        }
    };
    function checkNumberWeight(number: number | null): number | null {
        if (number) {
            return (number)
        } else {
            return (null)
        }
    };

    let attempts: Attempt[] = [
        {
            number: 1,
            times: checkNumberTimes(times1),
            weight: checkNumberWeight(weight1)
        },
        {
            number: 2,
            times: checkNumberTimes(times2),
            weight: checkNumberWeight(weight2)
        },
        {
            number: 3,
            times: checkNumberTimes(times3),
            weight: checkNumberWeight(weight3)
        },
        {
            number: 4,
            times: checkNumberTimes(times4),
            weight: checkNumberWeight(weight4)
        },
        {
            number: 5,
            times: checkNumberTimes(times5),
            weight: checkNumberWeight(weight5)
        }
    ];

    let exerciseWithAttempt: ExerciseWithAttmepts = {
        attempts: attempts,
        exercise: exercise
    };

    dispatch(editExercise([...exerciseArray, exerciseWithAttempt]));
};

export function timesValue(
    times1: number | null,
    times2: number | null,
    times3: number | null,
    times4: number | null,
    times5: number | null,
    num: number
): number | null {
    switch (num) {
        case 1:
            return (times1);
            break;
        case 2:
            return (times2);
            break;
        case 3:
            return (times3);
            break;
        case 4:
            return (times4);
            break;
        default:
            return (times5);
            break;
    }
}