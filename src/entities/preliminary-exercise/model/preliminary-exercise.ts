import type { ExerciseWithAttmepts } from "../../../shared/types/exercise";
import type { Attempt } from "../../../shared/types/workout";

export const columns = [
    {
        title: 'Подходы',
        dataIndex: 'attempts',
        key: 'attempts',
    },
    {
        title: 'Количество повторений',
        dataIndex: 'times',
        key: 'times',
    },
    {
        title: 'Вес',
        dataIndex: 'weight',
        key: 'weight',
    }
];

export function generateDataSource(attempts: Attempt[]) {
    let tempArray = new Array();

    function checkNumber(number: number | null | 'max'): string {
        if (number === null) {
            return ('⎯')
        } else {
            return (`${number}`)
        }
    };

    attempts.forEach((attempt) => {
        tempArray.push({
            key: `${attempt.number}`,
            attempts: `Подход ${attempt.number}`,
            times: checkNumber(attempt.times),
            weight: checkNumber(attempt.weight)
        })
    });

    return (tempArray);
};

export function deleteExercise(index: number, exercises: ExerciseWithAttmepts[]): ExerciseWithAttmepts[] {
    let tempArray = new Array();

    exercises.forEach((exercise, i) => {
        if (index !== i) {
            tempArray.push(exercise)
        }
    });

    return (tempArray)
}