import { createBrowserRouter } from 'react-router'
import HomePage from '@/pages/HomePage'
import MainLayout from '@/layouts/MainLayout'
import AboutPage from '../pages/AboutPage'
import NotFound from '../pages/NotFoundPage'
import TripsPage from '../pages/trips/TripsPage'
import TripPage from '@/pages/trips/TripPage'
import BookingCreatePage from '@/pages/bookings/BookingCreatePage'
import BookingConfirmPage from '@/pages/bookings/BookingConfirmPage'

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
          {
            path: 'confirm',
            element: <BookingConfirmPage />,
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
