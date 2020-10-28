import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';
import VendorLayouts from '../layouts/vendorLayout/VendorLayout';

const Home = lazy(() => import('../pages/Home'));
<<<<<<< HEAD
const VendorLandingPage = lazy(() => import('../pages/vendorshop/Vendor'));
const EventSchedule = lazy(() => import('../pages/events/Event'));
const BoothView = lazy(() => import('../pages/boothview/BoothView'));
const CartView = lazy(() => import('../pages/cartView/CartView'));
=======
const Register = lazy(() => import('../pages/Register'));
>>>>>>> 431e1a2d39c8987d4517026384cb592ef7094e23

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

export const VENDOR_ROUTES = [
  {
    path: '/vendor',
    component: VendorLandingPage,
    layout: VendorLayouts,
  },
  {
    path: '/event-schedule',
    component: EventSchedule,
    layout: VendorLayouts,
  },
  {
    path: '/event-booth',
    component: BoothView,
    layout: VendorLayouts,
  },
  {
    path: '/cart-checkout',
    component: CartView,
    layout: VendorLayouts,
  },
];
