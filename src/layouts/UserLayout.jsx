import AppFooter from '@/components/AppFooter'
import AppSpinner from '@/components/AppSpinner'
import AppUserHeader from '@/components/AppUserHeader'
import useSessionStorage from '@/hooks/useSessionStorage'
import { useAuthStore } from '@/stores/useAuthStore'
import { useUserStore } from '@/stores/useUserStore'
import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'

const UserLayout = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const { fetchProfile, loading: loadingUser } = useUserStore()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated())
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
      <AppUserHeader />

      <div className="pb-8 bg-gray-200">
        <br />
        {loading ? (
          <AppSpinner className="pb-8 bg-gray-200" />
        ) : isAuthenticated ? (
          <Outlet />
        ) : (
          <Navigate to={`/login`} replace />
        )}
      </div>

      <AppFooter />
    </>
  )
}
export default UserLayout
