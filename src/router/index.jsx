import { createBrowserRouter } from 'react-router'
import HomePage from '@/pages/HomePage'
import MainLayout from '@/layouts/MainLayout'
import AboutPage from '../pages/AboutPage'
import NotFound from '../pages/NotFoundPage'
import TripsPage from '../pages/trips/TripsPage'
import TripPage from '@/pages/trips/TripPage'
import CreateBookingPage from '@/pages/bookings/CreateBookingPage'

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
            element: <CreateBookingPage />,
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
