import { lazy } from 'react';

/**
 * Application Layouts(wrappers) for Routes
 */

import MainLayouts from '../layouts/mainLayout/MainLayout';
import VendorLayouts from '../layouts/vendorLayout/VendorLayout';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayouts';
import DashBoardLayoutFair from '../layouts/dashboard/Dashboard';
import EcommerceLayout from '../layouts/ecommerce/EcommerceLayout';
import FairLayout from '../layouts/fairLayout/FairLayout';
import VendorDashBoard from '../layouts/vendorDashboard/VendorDashBoard';

/**
 * Landing pages
 */

const Home = lazy(() => import('../pages/Home'));
const fairLandingPage = lazy(() => import('../pages/fairSignUp/fairLandingPage'));

/**
 * Authentication for users
 */

const SignIn = lazy(() => import('../pages/SignIn'));
const Register = lazy(() => import('../pages/Register'));

/** *
 * Routes for fair-admin to create and manage fair..
 */
const CreateFair = lazy(() => import('../pages/createfair/CreateFair'));
const FairDetails = lazy(() => import('../pages/createfair/FairDetails'));
const FairSpeakers = lazy(() => import('../pages/createfair/FairSpeakers'));
const FairPricing = lazy(() => import('../pages/createfair/FairPricingPlans'));
const VendorSetting = lazy(() => import('../pages/createfair/VendorSetting'));
const FairPlans = lazy(() => import('../pages/createfair/FairPlans'));
const VerificationRequest = lazy(() => import('../pages/VerificationRequest'));
const VerificationConfirm = lazy(() => import('../pages/VerificationConfirmation'));
const AllFairs = lazy(() => import('../pages/fairSignUp/AllFairsPage'));
const ApproveCredentials = lazy(() => import('../pages/ApproveCredentials'));

/** *
 * Vendor Landing page and page views..
 */
const VendorLandingPage = lazy(() => import('../pages/vendorshop/Vendor'));
const EventSchedule = lazy(() => import('../pages/events/Event'));
const BoothView = lazy(() => import('../pages/boothview/BoothView'));
const CartView = lazy(() => import('../pages/cartView/CartView'));
const VendorProfile = lazy(() => import('../pages/fairSignUp/VendorProfile'));
const Credentials = lazy(() => import('../pages/SinlgeCredential'));

/** *
 * Platform Admin routes
 */
const ManageFairSidebar = lazy(() => import('../pages/DashboardPages/Manage-Fair/ManageFairSideBar'));
const FairPageDashboard = lazy(() => import('../pages/DashboardPages/Manage-Fair-Page/FairPageDashboard'));
const DashboardPages = lazy(() => import('../pages/DashboardPages/Dashboard'));
const Fileupload = lazy(() => import('../pages/fairSignUp/RequiredCredentials'));

/** **
 * Ecommerce Platform
 */

const ProductUpload = lazy(() => import('../pages/productUpload/ProductUpload'));
const ProductDetails = lazy(() => import('../pages/ecommerce/ProductDetails'));
const ShoppingPage = lazy(() => import('../pages/ecommerce/Ecommerce'));
const ShoppingCart = lazy(() => import('../pages/ecommerce/cart/Cart'));
const CheckoutCart = lazy(() => import('../pages/ecommerce/checkout/Checkout'));
const UsersLandingPage = lazy(() => import('../pages/fairSignUp/UserLandingPage'));
const PaystackPay = lazy(() => import('../pages/Payment/Paystack'));

export const routesList = [
  {
    path: '/',
    component: Home,
    layout: MainLayouts,
  },
  {
    path: '/products/collections',
    component: ShoppingPage,
    layout: EcommerceLayout,
  },
  {
    path: '/products/cart',
    component: ShoppingCart,
    layout: EcommerceLayout,
  },
  {
    path: '/products/details/:name',
    component: ProductDetails,
    layout: EcommerceLayout,
  },
  {
    path: '/requiredfiles/:id',
    component: Fileupload,
    layout: FairLayout,
  },
  {
    path: '/allfairs',
    component: AllFairs,
    layout: FairLayout,
  },
  {
    path: '/vendorprofile/:id',
    component: VendorProfile,
    layout: DashboardLayout,
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
    path: '/payment/paystack',
    component: PaystackPay,
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
    path: '/fair-landing-page/:id',
    component: fairLandingPage,
    layout: FairLayout,
  },
  {
    path: '/user-landing-page',
    component: UsersLandingPage,
    layout: FairLayout,
  },
  {
    path: '/approvecredential',
    component: ApproveCredentials,
    layout: DashBoardLayoutFair,
  },
  {
    path: '/approvecredential/credentials/:id',
    component: Credentials,
    layout: DashBoardLayoutFair,
  },
];

export const privateRoutes = [
  {
    path: '/products/create',
    component: ProductUpload,
    layout: VendorDashBoard,
  },
  {
    path: '/products/checkout',
    component: CheckoutCart,
    layout: EcommerceLayout,
  },
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
