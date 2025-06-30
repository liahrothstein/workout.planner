import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { TrainingType } from '../../types/workout';

const initialState: TrainingType | string = 'Пусто';

export const trainingTypeSlice = createSlice({
    name: 'trainingType',
    initialState,
    reducers: {
        editTrainingType: (_, action: PayloadAction<TrainingType | string>) => {
            return (action.payload)
        }
    }
});

export const { editTrainingType } = trainingTypeSlice.actions;