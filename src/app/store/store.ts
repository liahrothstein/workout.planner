import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { cardioSlice, exerciseSilce, muscleGroupsSlice, notesSlice, stretchingSlice, trainingTypeSlice, warmUpSlice, workoutSlice } from '@slices/index';

const rootReducer = combineReducers({
    exercise: exerciseSilce.reducer,
    muscleGroups: muscleGroupsSlice.reducer,
    trainingType: trainingTypeSlice.reducer,
    notes: notesSlice.reducer,
    cardio: cardioSlice.reducer,
    workout: workoutSlice.reducer,
    warmUp: warmUpSlice.reducer,
    stretching: stretchingSlice.reducer
});

export function setupStore() {
    return (
        configureStore({
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => (getDefaultMiddleware())
        })
    )
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;