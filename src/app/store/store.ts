import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { exerciseSilce, muscleGroupsSlice, trainingTypeSlice } from '../../shared/lib/slices/index';

const rootReducer = combineReducers({
    exercise: exerciseSilce.reducer,
    muscleGroups: muscleGroupsSlice.reducer,
    trainingType: trainingTypeSlice.reducer
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