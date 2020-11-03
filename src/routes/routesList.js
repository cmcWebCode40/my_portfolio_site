import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';
import VendorLayouts from '../layouts/vendorLayout/VendorLayout';
import DashBoardLayoutFair from '../layouts/dashboard/Dashboard';

const Home = lazy(() => import('../pages/Home'));
const CreateFair = lazy(() => import('../pages/createfair/CreateFair'));
const FairDetails = lazy(() => import('../pages/createfair/FairDetails'));
const FairSpeakers = lazy(() => import('../pages/createfair/FairSpeakers'));
const FairPricing = lazy(() => import('../pages/createfair/FairPricingPlans'));
const VendorSetting = lazy(() => import('../pages/createfair/VendorSetting'));
const FairPlans = lazy(() => import('../pages/createfair/FairPlans'));
const VendorLandingPage = lazy(() => import('../pages/vendorshop/Vendor'));
const EventSchedule = lazy(() => import('../pages/events/Event'));
const BoothView = lazy(() => import('../pages/boothview/BoothView'));
const CartView = lazy(() => import('../pages/cartView/CartView'));
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
    layout: MainLayouts,
  },
];

export const privateRoutes = [
  {
    path: '/fair/dashboard-overview',
    component: CreateFair,
    layout: DashBoardLayoutFair,
  },
  {
    path: '/fair/dashboard-overview/:fairId',
    component: FairDetails,
    layout: DashBoardLayoutFair,
  },
  {
    path: '/fair/dashboard-overview/:fairId/fair-speaker',
    component: FairSpeakers,
    layout: DashBoardLayoutFair,
  },
  {
    path: '/fair/dashboard-overview/:fairId/fair-pricing-plan',
    component: FairPricing,
    layout: DashBoardLayoutFair,
  },
  {
    path: '/fair/dashboard-overview/:fairId/fair-plans',
    component: FairPlans,
    layout: DashBoardLayoutFair,
  },
  {
    path: '/fair/dashboard-overview/:fairId/fair-vendor-requirements',
    component: VendorSetting,
    layout: DashBoardLayoutFair,
  },
  {
    path: '/fair/dashboard',
    component: Home,
    layout: MainLayouts,
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
