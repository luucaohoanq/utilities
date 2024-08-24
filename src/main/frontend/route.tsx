import { Route, Routes } from 'react-router-dom';
import PBKDF2View, { config as pbkdf2Config } from './views/PBKDF2View';

const routes = [
  { path: '/pbkdf2', element: <PBKDF2View />, config: pbkdf2Config },
];

export default function AppRoutes() {
  return (
      <Routes>
        {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
  );
}