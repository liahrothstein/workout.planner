import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Workout } from '../../types/workout';

const initialState: Workout = {
    trainingType: 'Пусто',
    muscleGroups: [],
    exercises: [],
    cardioExercises: {
        name: null,
        time: '',
        rhythm: null
    },
    notes: ''
};

export const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        setWorkout: (_, action: PayloadAction<Workout>) => {
            return (action.payload)
        }
    }
});

export const { setWorkout } = workoutSlice.actions;