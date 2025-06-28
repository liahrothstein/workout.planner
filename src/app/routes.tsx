import { Routes, Route } from "react-router-dom";
import { Create, Home } from '@pages/index'

import type { JSX } from "react";

export const routes: JSX.Element = (
    <Routes>
        <Route path="/workout.planner/" element={<Home />} />
        <Route path="/workout.planner/create/" element={<Create />} />
        <Route path="/workout.planner/edit/" />
        <Route path="/workout.planner/workout/:hash" />
    </Routes>
);