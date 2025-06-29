import { TrainingType } from "../../../shared/types/workout";
import type {
    TrainingTypeOption,
    TrainingTypeCascaderProps,
    CardioCascaderProps,
    CardioOption
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

const cardioOptions: CardioOption[] = [
    {
        value: 'Эллипс',
        label: 'Эллипс'
    },
    {
        value: 'Беговая дорожка',
        label: 'Беговая дорожка'
    },
    {
        value: 'Велотренажёр',
        label: 'Велотренажёр'
    }
];

export const cardioCascaderProps: CardioCascaderProps = {
    options: cardioOptions,
    placeholder: 'Кардиотренировка'
}