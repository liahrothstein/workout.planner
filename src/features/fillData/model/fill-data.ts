import { TrainingType } from "../../../shared/types/workout";
import type {
    TrainingTypeOption,
    TrainingTypeCascaderProps
} from "../../../shared/types/cascader";

const trainingTypeOptions: TrainingTypeOption[] = [
    {
        value: TrainingType.Glycolytic,
        label: TrainingType.Glycolytic
    },
    {
        value: TrainingType.Circular,
        label: TrainingType.Circular
    },
    {
        value: TrainingType.Negative,
        label: TrainingType.Negative
    },
    {
        value: TrainingType.Positive,
        label: TrainingType.Positive
    },
    {
        value: TrainingType.Power,
        label: TrainingType.Power
    },
    {
        value: TrainingType.Split,
        label: TrainingType.Split
    },
    {
        value: TrainingType.Tempo,
        label: TrainingType.Tempo
    }
];

export const trainingTypeCascaderProps: TrainingTypeCascaderProps = {
    options: trainingTypeOptions,
    placeholder: 'Вид тренировки'
};

export function ejectTrainingType(trainingType: TrainingType[] | undefined | null): TrainingType | string {
    if ((trainingType === null) || (trainingType === undefined)) {
        return ('Пусто')
    } else {
        return (trainingType[0])
    }
};