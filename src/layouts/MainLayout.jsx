import { Outlet, useLocation } from 'react-router'
import AppHeader from '../components/AppHeader'
import AppFooter from '@/components/AppFooter'

const MainLayout = () => {
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <>
      {!isHomePage && <AppHeader />}

      <div className="pb-8 bg-gray-200">
        <Outlet />
      </div>

      {/* <!-- Footer   -----------------> */}
      <AppFooter />
    </>
  )
}
export default MainLayout
