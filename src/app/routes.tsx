import type { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Create, Workout } from '../pages';

export const routes: JSX.Element = (
  <Routes>
    <Route path="/" element={<Navigate to="/create/" />} />
    <Route path="/create/" element={<Create />} />
    <Route path="/workout/" element={<Workout />} />
  </Routes>
);
