import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';
import VendorLayouts from '../layouts/vendorLayout/VendorLayout';
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayouts";


const Home = lazy(() => import('../pages/Home'));
const VendorLandingPage = lazy(() => import('../pages/vendorshop/Vendor'));
const EventSchedule = lazy(() => import('../pages/events/Event'));
const BoothView = lazy(() => import('../pages/boothview/BoothView'));
const CartView = lazy(() => import('../pages/cartView/CartView'));
const ManageFairSidebar = lazy(() => import("../pages/DashboardPages/Manage-Fair/ManageFairSideBar"))
const FairPageDashboard = lazy(() => import("../pages/DashboardPages/Manage-Fair-Page/FairPageDashboard"))
// const Register = lazy(() => import('../pages/Register'));
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
    path: '/dashboard-managefair/vendor',
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
    path: '/dashboard-fairpage',
    component: FairPageDashboard,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard/construction',
    component: DashboardPages,
    layout: DashboardLayout,
  }
];

export const privateRoutes = [
  {
    path: '/dashboard-p',
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
