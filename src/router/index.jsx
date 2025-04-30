import { createBrowserRouter } from 'react-router'
import MainLayout from '@/layouts/MainLayout'
import GuestLayout from '@/layouts/GuestLayout'
import UserLayout from '@/layouts/UserLayout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import NotFound from '@/pages/NotFoundPage'
import TripsPage from '@/pages/trips/TripsPage'
import TripPage from '@/pages/trips/TripPage'
import BookingCreatePage from '@/pages/bookings/BookingCreatePage'
import PaymentVerifyPage from '@/pages/payments/PaymentVerifyPage'
import PaymentPage from '@/pages/payments/PaymentPage'
import ProfileUpdatePage from '@/pages/users/ProfileUpdatePage'
import UserDashboardPage from '@/pages/users/UserDashboardPage'
import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import PaymentsPage from '@/pages/payments/PaymentsPage'
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
import ErrorBoundary from '@/components/ErrorBoundary'
import AdminBookingsPage from '@/pages/admin/bookings/BookingsPage'
import AdminPaymentsPage from '@/pages/admin/payments/PaymentsPage'

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
        path: 'profile',
        children: [
          {
            path: 'edit',
            element: <ErrorBoundary children={<ProfileUpdatePage />} />,
          },
        ],
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
        path: 'trips',
        children: [
          {
            path: '',
            element: <ErrorBoundary children={<AdminTripsPage />} />,
          },
          {
            path: ':id',
            element: <ErrorBoundary children={<AdminTripPage />} />,
          },
          {
            path: 'create',
            element: <ErrorBoundary children={<TripCreatePage />} />,
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
            path: ':id',
            element: <ErrorBoundary children={<VehiclePage />} />,
          },
          {
            path: 'create',
            element: <ErrorBoundary children={<VehicleCreatePage />} />,
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
