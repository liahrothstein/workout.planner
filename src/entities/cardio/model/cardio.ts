import { CascaderOption } from "@utils/cascader-option";
import { CardioType } from "../../../shared/types/workout";

import type { CascaderProps } from "../../../shared/types/cascader";

const cardioOptions: CascaderOption[] = [
    new CascaderOption(CardioType.Ellipse, CardioType.Ellipse),
    new CascaderOption(CardioType.Treadmill, CardioType.Treadmill),
    new CascaderOption(CardioType.ExerciseBike, CardioType.ExerciseBike)
];

export const cardioCascaderProps: CascaderProps = {
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