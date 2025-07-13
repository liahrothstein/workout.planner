import type { CardioCascaderProps, CardioOption } from "../../../shared/types/cascader";
import { CardioType } from "../../../shared/types/workout";

const cardioOptions: CardioOption[] = [
    {
        value: CardioType.Ellipse,
        label: CardioType.Ellipse
    },
    {
        value: CardioType.Treadmill,
        label: CardioType.Treadmill
    },
    {
        value: CardioType.ExerciseBike,
        label: CardioType.ExerciseBike
    }
];

export const cardioCascaderProps: CardioCascaderProps = {
    options: cardioOptions,
    placeholder: 'Кардиотренировка'
};

export function timeParse(minutes: number, seconds: number): string {
    if (seconds === 0) {
        return (`${minutes} мин.`)
    } else {
        return (`${minutes} мин. ${seconds} с.`)
    }
}