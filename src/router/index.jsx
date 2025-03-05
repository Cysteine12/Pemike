import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'
import HomePage from '@/pages/HomePage'
import MainLayout from '@/layouts/MainLayout'
import AboutPage from '../pages/AboutPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </>
  )
)

export default router
