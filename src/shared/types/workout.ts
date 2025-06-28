export enum Cardio {
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

interface CardioExercise {
    name: Cardio,
    time: string,
    rhythm: number
};

export interface Workout {
    trainingType: TrainingType,
    muscleGroups: MuscleGroup[],
    exercises: Exercise[],
    cardioExercises: CardioExercise[] | null,
    notes: string
}