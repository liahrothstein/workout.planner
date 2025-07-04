import { Routes, Route, Navigate } from "react-router-dom";
import { Create, Workout } from '@pages/index'

import type { JSX } from "react";

export const routes: JSX.Element = (
    <Routes>
        <Route path="/workout.planner/" element={<Navigate to='/workout.planner/create/' />} />
        <Route path="/workout.planner/create/" element={<Create />} />
        <Route path="/workout.planner/workout/" element={<Workout />} />
    </Routes>
);