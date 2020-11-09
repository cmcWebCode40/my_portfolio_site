import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';
import VendorLayouts from '../layouts/vendorLayout/VendorLayout';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayouts';
import DashBoardLayoutFair from '../layouts/dashboard/Dashboard';
import FairLayout from '../layouts/fairLayout/FairLayout';

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
const ManageFairSidebar = lazy(() => import('../pages/DashboardPages/Manage-Fair/ManageFairSideBar'));
const FairPageDashboard = lazy(() => import('../pages/DashboardPages/Manage-Fair-Page/FairPageDashboard'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Register = lazy(() => import('../pages/Register'));
const VerificationRequest = lazy(() => import('../pages/VerificationRequest'));
const VerificationConfirm = lazy(() => import('../pages/VerificationConfirmation'));
const DashboardPages = lazy(() => import('../pages/DashboardPages/Dashboard'));
const Fileupload = lazy(() => import("../pages/fairSignUp/RequiredCredentials"))
const fairLandingPage = lazy(() => import('../pages/fairSignUp/fairLandingPage'));

export const routesList = [
  {
    path: '/',
    component: Home,
    layout: MainLayouts,
  },
  {
    // path: '/requiredfiles/:id',
    path: '/requiredfiles',
    component: Fileupload,
    layout: MainLayouts,
  },
  {
    path: '/dashboard',
    component: DashboardPages,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard/shops',
    component: DashboardPages,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard/fairevents',
    component: DashboardPages,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard-managefair',
    component: ManageFairSidebar,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard-managefair/booth',
    component: ManageFairSidebar,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard-managefair/advert',
    component: ManageFairSidebar,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard-managefair/speaker',
    component: ManageFairSidebar,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard-managefair/vendor',
    component: ManageFairSidebar,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard-managefair/construction',
    component: ManageFairSidebar,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard-fairpage',
    component: FairPageDashboard,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard/construction',
    component: DashboardPages,
    layout: DashboardLayout,
  },

  {
    path: '/register',
    component: Register,
    layout: MainLayouts,
  },
  {
    path: '/login',
    component: SignIn,
    layout: MainLayouts,
  },
  {
    path: '/verify-confirm',
    component: VerificationConfirm,
    layout: MainLayouts,
  },
  {
    path: '/verify-request',
    component: VerificationRequest,
    layout: MainLayouts,
  },
  {
    path: '/fair-landing-page',
    component: fairLandingPage,
    layout: FairLayout,
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
