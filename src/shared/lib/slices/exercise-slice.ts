import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ExerciseWithAttmepts } from '../../types/exercise';

const initialState: any = [];

export const exerciseSilce = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        editExercise: (__, action: PayloadAction<ExerciseWithAttmepts[]>) => {
            return (action.payload)
        }
    }
});

export const { editExercise } = exerciseSilce.actions;