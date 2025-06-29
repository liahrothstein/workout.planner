import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ExerciseWithAttmepts } from '../../types/exercise';

const initialState = new Array();

export const exerciseSilce = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        pushExercise: (state, action: PayloadAction<ExerciseWithAttmepts>) => {
            state.push(action.payload)
        }
    }
});

export const { pushExercise } = exerciseSilce.actions;