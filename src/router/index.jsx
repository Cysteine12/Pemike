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

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact-us',
        element: <ContactPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'profile',
        children: [
          {
            path: 'edit',
            element: <ProfileUpdatePage />,
          },
        ],
      },
      {
        path: '/trips',
        children: [
          {
            path: '',
            element: <TripsPage />,
          },
          {
            path: ':id',
            element: <TripPage />,
          },
        ],
      },
    ],
  },

  // Customer-specific routes
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: '/',
        children: [
          {
            path: 'dashboard',
            element: <UserDashboardPage />,
          },
        ],
      },
      {
        path: '/bookings',
        children: [
          {
            path: 'create',
            element: <BookingCreatePage />,
          },
        ],
      },
      {
        path: '/payments',
        children: [
          {
            path: '',
            element: <PaymentsPage />,
          },
          {
            path: ':id',
            element: <PaymentPage />,
          },
          {
            path: 'verify',
            element: <PaymentVerifyPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
