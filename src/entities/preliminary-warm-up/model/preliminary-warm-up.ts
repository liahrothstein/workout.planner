import type { WarmUp } from "../../../shared/types/workout";

export const columns = [
    {
        title: 'Подходы',
        dataIndex: 'attempts',
        key: 'attempts',
    },
    {
        title: 'Повторения',
        dataIndex: 'times',
        key: 'times',
    }
];

export function generateDataSource(warmUp: WarmUp, index: number) {
    return ([{
        key: `${index}`,
        attempts: warmUp.attempts,
        times: warmUp.times
    }])
};

export function deleteWarmUp(index: number, warmUp: WarmUp[]): WarmUp[] {
    let tempArray = new Array();

    warmUp.forEach((warmUp, i) => {
        if (index !== i) {
            tempArray.push(warmUp)
        }
    });

    return (tempArray)
}