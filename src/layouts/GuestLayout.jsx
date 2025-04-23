import { useAuthStore } from '@/stores/useAuthStore'
import { Navigate, Outlet } from 'react-router'

const GuestLayout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated())
  const userRole = useAuthStore((state) => state.userRole())

  return (
    <div className="bg-gray-200 overflow-auto h-screen">
      {isAuthenticated ? (
        <Navigate
          to={(userRole === 'ADMIN' ? '/admin' : '') + '/dashboard'}
          replace
        />
      ) : (
        <Outlet />
      )}
    </div>
  )
}
export default GuestLayout
