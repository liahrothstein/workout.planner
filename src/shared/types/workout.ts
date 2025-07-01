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
    Biceps = 'Бицепс'
};

export interface Attempt {
    number: number,
    times: number | null,
    weight: number | null
};

interface Exercise {
    name: string,
    attempts: Attempt[]
};

export interface CardioExercise {
    name: CardioType | null,
    time: string,
    rhythm: number | null
};

export interface Workout {
    trainingType: TrainingType,
    muscleGroups: MuscleGroup[],
    exercises: Exercise[],
    cardioExercises: CardioExercise | null,
    notes: string
}