import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'
import HomePage from '@/pages/HomePage'
import MainLayout from '@/layouts/MainLayout'
import AboutPage from '../pages/AboutPage'
import NotFound from '../pages/NotFoundPage'
import TripsPage from '../pages/trips/TripsPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
)

export default router
