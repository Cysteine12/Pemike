import Card from '@/components/Card'
import { useUserStore } from '@/stores/useUserStore'
import { useEffect } from 'react'
import { FaGoogle, FaPhoneAlt, FaUser, FaUserFriends } from 'react-icons/fa'

const AdminDashboardPage = () => {
  const { user, fetchProfile } = useUserStore()

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <Card
      styles={
        'md:mx-auto mx-8 mb-9 lg:min-w-[500px] bg-white font-bold text-blue-500 h-fit max-w-120'
      }
    >
      <ul>
        <li className="my-3 flex justify-between items-center">
          <span className="flex">
            <FaUser className={'mt-1 mr-3'} /> Name
          </span>
          <span className="text-gray-700 capitalize">
            {user.firstName} {user.lastName}
          </span>
        </li>

        <li className="my-3 flex justify-between items-center">
          <span className="flex">
            <FaGoogle className={'mt-1 mr-3'} /> Email
          </span>
          <span className="text-gray-700 font-bold">{user.email}</span>
        </li>

        <li className="my-3 flex justify-between items-center">
          <span className="flex">
            <FaPhoneAlt className={'mt-1 mr-3'} /> Phone Number
          </span>
          <span className="text-gray-700 font-bold">{user.phone}</span>
        </li>

        <li className="my-3 flex justify-between items-center">
          <span className="flex">
            <FaUserFriends className={'mt-1 mr-3'} /> Gender
          </span>
          <span className="text-gray-700 capitalize">{user.gender}</span>
        </li>
      </ul>
    </Card>
  )
}

export default AdminDashboardPage
