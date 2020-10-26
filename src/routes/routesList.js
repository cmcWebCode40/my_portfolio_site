import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));

export const routesList = [
  {
    path: '/',
    component: Home,
    layout: MainLayouts,
  },
  {
    path: '/register',
    component: Register,
    // layout: MainLayouts,
  },
];
