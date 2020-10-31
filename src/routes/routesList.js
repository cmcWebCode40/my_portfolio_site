import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';
import VendorLayouts from '../layouts/vendorLayout/VendorLayout';
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayouts";
import DashBoardLayoutFair from '../layouts/dashboard/Dashboard';

const Home = lazy(() => import('../pages/Home'));
const CreateFair = lazy(() => import('../pages/createfair/CreateFair'));
const VendorLandingPage = lazy(() => import('../pages/vendorshop/Vendor'));
const EventSchedule = lazy(() => import('../pages/events/Event'));
const BoothView = lazy(() => import('../pages/boothview/BoothView'));
const CartView = lazy(() => import('../pages/cartView/CartView'));
const ManageFairSidebar = lazy(() => import("../pages/DashboardPages/Manage-Fair/ManageFairSideBar"))
const FairPageDashboard = lazy(() => import("../pages/DashboardPages/Manage-Fair-Page/FairPageDashboard"))
const SignIn = lazy(() => import("../pages/SignIn"))
const Register = lazy(() => import('../pages/Register'));
const VerificationRequest = lazy(() => import('../pages/VerificationRequest'))
const VerificationConfirm = lazy(() => import('../pages/VerificationConfirmation'))
const DashboardPages = lazy(() => import("../pages/DashboardPages/Dashboard"))

export const routesList = [
  {
    path: '/',
    component: Home,
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

];

export const privateRoutes = [
  {
    path: '/dashboard-p',
    component: CreateFair,
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
