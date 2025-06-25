import { Routes, Route } from "react-router-dom";
import { Home } from '@pages/index'

import type { JSX } from "react";

export const routes: JSX.Element = (
    <Routes>
        <Route path="/workout.planner/" element={<Home />} />
    </Routes>
);