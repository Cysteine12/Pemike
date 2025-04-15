import { Outlet, useLocation } from 'react-router'
import AppHeader from '../components/AppHeader'
import AppFooter from '@/components/AppFooter'
import { useAuthStore } from '@/stores/useAuthStore'
import AppUserHeader from '@/components/AppUserHeader'

const MainLayout = () => {
  const location = useLocation()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated())

  const isHomePage = location.pathname === '/'

  return (
    <>
      {!isHomePage && (
        <>{isAuthenticated ? <AppUserHeader /> : <AppHeader />}</>
      )}

      <div className="pb-8 bg-gray-200">
        {!isHomePage && <br />}
        <Outlet />
      </div>

      {/* <!-- Footer   -----------------> */}
      <AppFooter />
    </>
  )
}
export default MainLayout
