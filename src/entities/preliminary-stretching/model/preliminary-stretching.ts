import { TableColumn } from "@utils/table-column";

import type { Stretching } from "../../../shared/types/workout";

export const columns: TableColumn[] = [
    new TableColumn('Подходы', 'attempts', 'attempts'),
    new TableColumn('Повторения', 'times', 'times')
];

export function deleteStretching(index: number, stretching: Stretching[]): Stretching[] {
    let tempArray = new Array();

    stretching.forEach((stretching, i) => {
        if (index !== i) {
            tempArray.push(stretching)
        }
    });

    return (tempArray)
}