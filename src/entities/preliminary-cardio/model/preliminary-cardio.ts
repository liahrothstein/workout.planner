import { TableColumn } from "@utils/table-column";
import type { CardioExercise } from "../../../shared/types/workout";

export const columns: TableColumn[] = [
    new TableColumn('Время', 'time', 'time'),
    new TableColumn('Ритм', 'rhytm', 'rhytm')
];

export function deleteCardioExercise(index: number, cardioExercise: CardioExercise[]): CardioExercise[] {
    let tempArray = new Array();

    cardioExercise.forEach((cardioExercise, i) => {
        if (index !== i) {
            tempArray.push(cardioExercise)
        }
    });

    return (tempArray)
}