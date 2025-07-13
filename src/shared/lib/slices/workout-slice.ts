import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { initWorkout } from '../../consts/workout';

import type { Workout } from '../../types/workout';

const initialState: Workout = initWorkout;

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