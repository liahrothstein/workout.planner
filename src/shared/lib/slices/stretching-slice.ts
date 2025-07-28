import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Stretching } from '../../types/workout';

const initialState = new Array();

export const stretchingSlice = createSlice({
    name: 'stretching',
    initialState,
    reducers: {
        setStretching: (_, action: PayloadAction<Stretching[]>) => {
            return (action.payload)
        }
    }
});

export const { setStretching } = stretchingSlice.actions;