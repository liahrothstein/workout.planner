import { CascaderOption } from "@utils/cascader-option";

import { TrainingType } from "../../../shared/types/workout";
import type { CascaderProps } from "../../../shared/types/cascader";

const trainingTypeOptions: CascaderOption[] = [
    new CascaderOption(TrainingType.Glycolytic, TrainingType.Glycolytic),
    new CascaderOption(TrainingType.Circular, TrainingType.Circular),
    new CascaderOption(TrainingType.Negative, TrainingType.Negative),
    new CascaderOption(TrainingType.Positive, TrainingType.Positive),
    new CascaderOption(TrainingType.Power, TrainingType.Power),
    new CascaderOption(TrainingType.Split, TrainingType.Split),
    new CascaderOption(TrainingType.Tempo, TrainingType.Tempo)
];

export const trainingTypeCascaderProps: CascaderProps = {
    options: trainingTypeOptions,
    placeholder: 'Вид тренировки'
};

export function ejectTrainingType(trainingType: string[] | undefined | null): TrainingType | string {
    if ((trainingType === null) || (trainingType === undefined)) {
        return ('Пусто')
    } else {
        return (trainingType[0])
    }
};