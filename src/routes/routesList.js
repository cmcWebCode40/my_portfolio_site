import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';

const Home = lazy(() => import('../pages/Home'));

export const routesList = [
  {
    path: '/',
    component: Home,
    layout: MainLayouts,
  },
];
