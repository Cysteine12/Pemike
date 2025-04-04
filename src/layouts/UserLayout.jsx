import AppFooter from '@/components/AppFooter'
import AppUserHeader from '@/components/AppUserHeader'
import { useAuthStore } from '@/stores/useAuthStore'
import { useUserStore } from '@/stores/useUserStore'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router'

const UserLayout = () => {
  const { fetchProfile } = useUserStore()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <>
      <AppUserHeader />

      <div className="pb-8 bg-gray-200">
        {isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace />}
      </div>

      <AppFooter />
    </>
  )
}
export default UserLayout
