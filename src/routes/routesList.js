import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';
import VendorLayouts from '../layouts/vendorLayout/VedndorLayout';

const Home = lazy(() => import('../pages/Home'));

export const routesList = [
  {
    path: '/',
    component: Home,
    layout: MainLayouts,
  },
];

export const VENDOR_ROUTES = [
  {
    path: '/',
    component: Home,
    layout: VendorLayouts,
  },
];
