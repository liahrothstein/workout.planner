import type { CardioExercise } from "../../../shared/types/workout";

export const columns = [
    {
        title: 'Время',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Ритм',
        dataIndex: 'rhytm',
        key: 'rhytm',
    }
];

export function generateDataSource(cardioExercise: CardioExercise, index: number) {
    return ([{
        key: `${index}`,
        time: cardioExercise.time,
        rhytm: cardioExercise.rhythm
    }])
};

export function deleteCardioExercise(index: number, cardioExercise: CardioExercise[]): CardioExercise[] {
    let tempArray = new Array();

    cardioExercise.forEach((cardioExercise, i) => {
        if (index !== i) {
            tempArray.push(cardioExercise)
        }
    });

    return (tempArray)
}