import type { ExerciseWithAttmepts } from "./exercise";

export enum CardioType {
    Ellipse = 'Эллипс',
    Treadmill = 'Беговая дорожка',
    ExerciseBike = 'Велотренажёр'
}

export enum TrainingType {
    Glycolytic = 'Гликолитическая',
    Circular = 'Круговая',
    Negative = 'Негативная',
    Positive = 'Позитивная',
    Power = 'Силовая',
    Split = 'Сплит',
    Tempo = 'Темпо'
};

export enum MuscleGroup {
    Shoulders = 'Плечи',
    Legs = 'Ноги',
    Back = 'Спина',
    Triceps = 'Трицепс',
    Chest = 'Грудь',
    Biceps = 'Бицепс',
    Press = 'Пресс',
    Forearms = 'Предплечья'
};

export interface Attempt {
    number: number,
    times: number | null | 'max',
    weight: number | null
};

export interface CardioExercise {
    name: CardioType | null,
    time: string,
    rhythm: number | null
};

export interface WarmUp {
    exercise: string[] | null | undefined,
    attempts: number | null,
    times: number | null
};

export interface Stretching {
    exercise: string[] | null | undefined,
    attempts: number | null,
    times: number | null
};

export interface Workout {
    trainingType: TrainingType | string,
    workoutNumber: number | null,
    muscleGroups: MuscleGroup[],
    exercises: ExerciseWithAttmepts[],
    cardioExercises: CardioExercise[],
    notes: string,
    warmUp: WarmUp[],
    stretching: Stretching[]
}