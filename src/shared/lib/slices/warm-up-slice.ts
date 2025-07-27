import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { WarmUp } from '../../types/workout';

const initialState = new Array();

export const warmUpSlice = createSlice({
    name: 'warmUp',
    initialState,
    reducers: {
        setWarmUp: (_, action: PayloadAction<WarmUp[]>) => {
            return (action.payload)
        }
    }
});

export const { setWarmUp } = warmUpSlice.actions;