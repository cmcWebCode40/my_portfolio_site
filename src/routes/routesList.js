import { lazy } from 'react';

/**
 * Layouts for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';
import VendorLayouts from '../layouts/vendorLayout/VendorLayout';
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayouts";
// import Sidebar from "../pages/DashboardPages/Manage-Fair/ManageFairSideBar";


const Home = lazy(() => import('../pages/Home'));
const VendorLandingPage = lazy(() => import('../pages/vendorshop/Vendor'));
const EventSchedule = lazy(() => import('../pages/events/Event'));
const BoothView = lazy(() => import('../pages/boothview/BoothView'));
const CartView = lazy(() => import('../pages/cartView/CartView'));
const ManageFairSidebar = lazy(() => import("../pages/DashboardPages/Manage-Fair/ManageFairSideBar"))
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
    path: '/dashboard-managefair',
    component: ManageFairSidebar,
    layout: DashboardLayout,
  },
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
