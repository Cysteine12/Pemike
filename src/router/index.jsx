import { createBrowserRouter } from 'react-router'
import MainLayout from '@/layouts/MainLayout'
import GuestLayout from '@/layouts/GuestLayout'
import UserLayout from '@/layouts/UserLayout'
import ErrorBoundary from '@/components/ErrorBoundary'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import NotFound from '@/pages/NotFoundPage'
import TripsPage from '@/pages/trips/TripsPage'
import TripPage from '@/pages/trips/TripPage'
import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import UserDashboardPage from '@/pages/users/UserDashboardPage'
import ProfilePage from '@/pages/users/ProfilePage'
import ProfileEditPage from '@/pages/users/ProfileEditPage'
import ProfilePasswordChangePage from '@/pages/users/ProfilePasswordChangePage'
import BookingCreatePage from '@/pages/bookings/BookingCreatePage'
import PaymentVerifyPage from '@/pages/payments/PaymentVerifyPage'
import PaymentsPage from '@/pages/payments/PaymentsPage'
import PaymentPage from '@/pages/payments/PaymentPage'
import ContactPage from '@/pages/ContactPage'
import ServicesPage from '@/pages/ServicesPage'
import AdminLayout from '@/layouts/AdminLayout'
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage'
import AdminTripsPage from '@/pages/admin/trips/TripsPage'
import AdminTripPage from '@/pages/admin/trips/TripPage'
import TripCreatePage from '@/pages/admin/trips/TripCreatePage'
import VehiclesPage from '@/pages/admin/vehicles/VehiclesPage'
import VehiclePage from '@/pages/admin/vehicles/VehiclePage'
import VehicleCreatePage from '@/pages/admin/vehicles/VehicleCreatePage'
import VehicleEditPage from '@/pages/admin/vehicles/VehicleEditPage'
import UsersPage from '@/pages/admin/users/UsersPage'
import UserCreatePage from '@/pages/admin/users/UserCreatePage'
import UserPage from '@/pages/admin/users/UserPage'
import AdminBookingsPage from '@/pages/admin/bookings/BookingsPage'
import AdminPaymentsPage from '@/pages/admin/payments/PaymentsPage'
import AdminPaymentPage from '@/pages/admin/payments/PaymentPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ErrorBoundary children={<GuestLayout />} />,
    children: [
      {
        path: '/login',
        element: <ErrorBoundary children={<LoginPage />} />,
      },
      {
        path: '/register',
        element: <ErrorBoundary children={<RegisterPage />} />,
      },
    ],
  },
  {
    path: '/',
    element: <ErrorBoundary children={<MainLayout />} />,
    children: [
      {
        path: '',
        index: true,
        element: <ErrorBoundary children={<HomePage />} />,
      },
      {
        path: 'about',
        element: <ErrorBoundary children={<AboutPage />} />,
      },
      {
        path: 'contact-us',
        element: <ErrorBoundary children={<ContactPage />} />,
      },
      {
        path: 'services',
        element: <ErrorBoundary children={<ServicesPage />} />,
      },
      {
        path: '/trips',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<TripsPage />} />,
          },
          {
            path: ':id',
            element: <ErrorBoundary children={<TripPage />} />,
          },
        ],
      },
    ],
  },

  // Customer-specific routes
  {
    path: '/',
    element: <ErrorBoundary children={<UserLayout />} />,
    children: [
      {
        path: '/',
        children: [
          {
            path: 'dashboard',
            element: <ErrorBoundary children={<UserDashboardPage />} />,
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<ProfilePage />} />,
          },
          {
            path: 'edit',
            element: <ErrorBoundary children={<ProfileEditPage />} />,
          },
          {
            path: 'change-password',
            element: <ErrorBoundary children={<ProfilePasswordChangePage />} />,
          },
        ],
      },
      {
        path: '/bookings',
        children: [
          {
            path: 'create',
            element: <ErrorBoundary children={<BookingCreatePage />} />,
          },
        ],
      },
      {
        path: '/payments',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<PaymentsPage />} />,
          },
          {
            path: ':id',
            element: <ErrorBoundary children={<PaymentPage />} />,
          },
          {
            path: 'verify',
            element: <ErrorBoundary children={<PaymentVerifyPage />} />,
          },
        ],
      },
    ],
  },

  // Admin-specific routes
  {
    path: '/admin',
    element: <ErrorBoundary children={<AdminLayout />} />,
    children: [
      {
        path: 'dashboard',
        element: <ErrorBoundary children={<AdminDashboardPage />} />,
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<UsersPage />} />,
          },
          {
            path: 'create',
            element: <ErrorBoundary children={<UserCreatePage />} />,
          },
          {
            path: ':id',
            element: <ErrorBoundary children={<UserPage />} />,
          },
        ],
      },
      {
        path: 'trips',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<AdminTripsPage />} />,
          },
          {
            path: 'create',
            element: <ErrorBoundary children={<TripCreatePage />} />,
          },
          {
            path: ':id',
            element: <ErrorBoundary children={<AdminTripPage />} />,
          },
        ],
      },
      {
        path: 'vehicles',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<VehiclesPage />} />,
          },
          {
            path: 'create',
            element: <ErrorBoundary children={<VehicleCreatePage />} />,
          },
          {
            path: ':id',
            element: <ErrorBoundary children={<VehiclePage />} />,
          },
          {
            path: ':id/edit',
            element: <ErrorBoundary children={<VehicleEditPage />} />,
          },
        ],
      },
      {
        path: 'bookings',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<AdminBookingsPage />} />,
          },
        ],
      },
      {
        path: 'payments',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<AdminPaymentsPage />} />,
          },
          {
            path: ':id',
            element: <ErrorBoundary children={<AdminPaymentPage />} />,
          },
        ],
      },
    ],
  },

  {
    path: '/',
    element: <ErrorBoundary children={<MainLayout />} />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
