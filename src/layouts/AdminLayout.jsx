import AppAdminHeader from '@/components/AppAdminHeader'
import AppFooter from '@/components/AppFooter'
import AppSpinner from '@/components/AppSpinner'
import useSessionStorage from '@/hooks/useSessionStorage'
import { useAuthStore } from '@/stores/useAuthStore'
import { useUserStore } from '@/stores/useUserStore'
import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'

const AdminLayout = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const { fetchProfile, loading: loadingUser } = useUserStore()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated())
  const userRole = useAuthStore((state) => state.userRole())
  const [, setSessionData] = useSessionStorage('redirect')

  useEffect(() => {
    if (!isAuthenticated) {
      setSessionData(location.pathname + location.search + location.hash)
    }
    const getProfile = async () => {
      await fetchProfile()

      setLoading(loadingUser)
    }
    getProfile()
  }, [])

  return (
    <>
      {loading ? (
        <AppSpinner className="py-12 bg-gray-200" />
      ) : isAuthenticated && userRole === 'ADMIN' ? (
        <>
          <AppAdminHeader />

          <div className="pb-8 bg-gray-200">
            <br />
            <Outlet />
          </div>
        </>
      ) : (
        <Navigate to={`/login`} replace />
      )}

      <AppFooter />
    </>
  )
}
export default AdminLayout
