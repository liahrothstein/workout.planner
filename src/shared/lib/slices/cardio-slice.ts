import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CardioExercise } from '../../types/workout';

const initialState = new Array();

export const cardioSlice = createSlice({
    name: 'cardio',
    initialState,
    reducers: {
        setCardio: (_, action: PayloadAction<CardioExercise[]>) => {
            return (action.payload)
        }
    }
});

export const { setCardio } = cardioSlice.actions;