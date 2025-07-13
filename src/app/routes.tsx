import { Routes, Route, Navigate } from "react-router-dom";
import { Create, Workout } from '../pages'

import type { JSX } from "react";

export const routes: JSX.Element = (
    <Routes>
        <Route path="/" element={<Navigate to='/create/' />} />
        <Route path="/create/" element={<Create />} />
        <Route path="/workout/" element={<Workout />} />
    </Routes>
);