import { TableColumn } from "@utils/table-column";

import type { WarmUp } from "../../../shared/types/workout";

export const columns: TableColumn[] = [
    new TableColumn('Подходы', 'attempts', 'attempts'),
    new TableColumn('Повторения', 'times', 'times')
];

export function deleteWarmUp(index: number, warmUp: WarmUp[]): WarmUp[] {
    let tempArray = new Array();

    warmUp.forEach((warmUp, i) => {
        if (index !== i) {
            tempArray.push(warmUp)
        }
    });

    return (tempArray)
}