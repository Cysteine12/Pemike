import { useUserStore } from '@/stores/useUserStore'
import { useEffect } from 'react'

const UserDashboardPage = () => {
  const { user, fetchProfile } = useUserStore()

  useEffect(() => {
    fetchProfile()
  }, [])

  return <div>{JSON.stringify(user)}</div>
}

export default UserDashboardPage
