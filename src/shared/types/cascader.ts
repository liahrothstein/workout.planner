import type { Dispatch, SetStateAction } from 'react';
import { CardioType, MuscleGroup, TrainingType } from './workout';

export interface ExerciseSecondLevelOption {
    value: string;
    label: string;
}

export interface ExerciseFirstLevelOption {
    value: MuscleGroup;
    label: MuscleGroup;
    children?: ExerciseSecondLevelOption[];
}

export interface ExerciseOption {
    value: string;
    label: string;
    children?: ExerciseOption[];
}

export interface TrainingTypeOption {
    value: TrainingType;
    label: TrainingType;
    children?: TrainingTypeOption[];
}

export interface ExerciseCascaderProps {
    options: ExerciseOption[],
    placeholder: string
}

export interface TrainingTypeCascaderProps {
    options: TrainingTypeOption[],
    placeholder: string
}

export interface CardioOption {
    value: CardioType;
    label: CardioType;
}
export interface CardioCascaderProps {
    options: CardioOption[],
    placeholder: string
}

export interface WarmUpOption {
    value: string,
    label: string
}

export interface WarmUpCascaderProps {
    options: WarmUpOption[],
    placeholder: string
}

export type SetTimes = Dispatch<SetStateAction<number | null>>;
export type SetWeight = Dispatch<SetStateAction<number | null>>;