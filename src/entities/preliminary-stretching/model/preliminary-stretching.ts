import type { Stretching } from "../../../shared/types/workout";

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

export function generateDataSource(stretching: Stretching, index: number) {
    return ([{
        key: `${index}`,
        attempts: stretching.attempts,
        times: stretching.times
    }])
};

export function deleteStretching(index: number, stretching: Stretching[]): Stretching[] {
    let tempArray = new Array();

    stretching.forEach((stretching, i) => {
        if (index !== i) {
            tempArray.push(stretching)
        }
    });

    return (tempArray)
}