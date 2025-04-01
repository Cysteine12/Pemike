import { createBrowserRouter } from 'react-router'
import HomePage from '@/pages/HomePage'
import MainLayout from '@/layouts/MainLayout'
import AboutPage from '../pages/AboutPage'
import NotFound from '../pages/NotFoundPage'
import TripsPage from '../pages/trips/TripsPage'
import TripPage from '@/pages/trips/TripPage'
import BookingCreatePage from '@/pages/bookings/BookingCreatePage'
import PaymentVerifyPage from '@/pages/payments/PaymentVerifyPage'
import PaymentPage from '@/pages/payments/PaymentPage'
import UserCreatePage from '@/pages/users/UserCreatePage'
import UserDashboardPage from '@/pages/users/UserDashboardPage'
import LoginPage from '@/pages/auth/LoginPage'

const router = createBrowserRouter([
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
        path: 'login',
        element: <LoginPage />,
      },
      // Customer-specific routes
      {
        path: '/',
        children: [
          {
            path: 'dashboard',
            element: <UserDashboardPage />,
          },
          {
            path: 'profile',
            children: [
              {
                path: 'create',
                element: <UserCreatePage />,
              },
            ],
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
            path: ':id',
            element: <PaymentPage />,
          },
          {
            path: 'verify',
            element: <PaymentVerifyPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
