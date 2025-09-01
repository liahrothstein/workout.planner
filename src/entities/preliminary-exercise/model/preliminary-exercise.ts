import { Attempt, TableColumn, TableData, checkNumber } from "@utils/index";

import type { ExerciseWithAttmepts } from "../../../shared/types/exercise";

export const columns: TableColumn[] = [
    new TableColumn('Подходы', 'attempts', 'attempts'),
    new TableColumn('Количество повторений', 'times', 'times'),
    new TableColumn('Вес', 'weight', 'weight')
];

export function generateDataSource(attempts: Attempt[]) {
    let tempArray = new Array();

    attempts.forEach((attempt) => {
        tempArray.push(new TableData(`${attempt.number}`, `Подход ${attempt.number}`, checkNumber(attempt.times), checkNumber(attempt.weight)))
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