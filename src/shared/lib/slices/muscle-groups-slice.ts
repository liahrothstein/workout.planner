import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { MuscleGroup } from '../../types/workout';

const initialState: MuscleGroup[] = [];

export const muscleGroupsSlice = createSlice({
    name: 'muscleGroups',
    initialState,
    reducers: {
        setMuscleGroups: (state, action: PayloadAction<MuscleGroup[]>) => {
            return (action.payload)
        }
    }
});

export const { setMuscleGroups } = muscleGroupsSlice.actions;