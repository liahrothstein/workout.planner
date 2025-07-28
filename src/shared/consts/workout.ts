import { MuscleGroup, type Workout } from "../types/workout";

export const initWorkout: Workout = {
    trainingType: 'Пусто',
    workoutNumber: null,
    muscleGroups: [],
    exercises: [],
    cardioExercises: [],
    notes: '',
    warmUp: [],
    stretching: []
};

export const groups: MuscleGroup[] = [
    MuscleGroup.Shoulders,
    MuscleGroup.Back,
    MuscleGroup.Chest,
    MuscleGroup.Biceps,
    MuscleGroup.Legs,
    MuscleGroup.Triceps,
    MuscleGroup.Press,
    MuscleGroup.Forearms
]