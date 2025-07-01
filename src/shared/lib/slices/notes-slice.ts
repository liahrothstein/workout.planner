import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (_, action: PayloadAction<string>) => {
            return (action.payload)
        }
    }
});

export const { setNotes } = notesSlice.actions;