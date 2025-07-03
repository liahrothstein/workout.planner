import type { Workout } from "../types/workout";

export const initWorkout: Workout = {
    trainingType: 'Пусто',
    workoutNumber: null,
    muscleGroups: [],
    exercises: [],
    cardioExercises: {
        name: null,
        time: '',
        rhythm: null
    },
    notes: ''
}