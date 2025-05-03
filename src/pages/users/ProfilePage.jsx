import AppButton from '@/components/AppButton'
import Card from '@/components/Card'
import { useUserStore } from '@/stores/useUserStore'
import { useEffect } from 'react'
import {
  FaEdit,
  FaGoogle,
  FaPhoneAlt,
  FaUser,
  FaUserFriends,
} from 'react-icons/fa'
import { useNavigate } from 'react-router'

const ProfilePage = () => {
  const navigate = useNavigate()
  const { user, fetchProfile } = useUserStore()

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <>
      <div className="mb-4 flex mx-auto max-w-[1000px]">
        <div className="mx-auto text-blue-500 font-bold text-2xl ">
          My Profile
        </div>
      </div>
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

        <div className="p-7 font-normal mb-4 flex justify-evenly mx-auto max-w-[1000px]">
          <AppButton
            onClick={() => navigate('/profile/change-password')}
            className={'mx-5 bg-yellow-500 px-2 py-1 text-white rounded'}
          >
            <FaEdit className="mr-2" /> Change Password
          </AppButton>
          <AppButton
            onClick={() => navigate('/profile/edit')}
            className={'mx-5 bg-blue-500 px-2 py-1 text-white rounded'}
          >
            <FaEdit className="mr-2" /> Edit Profile
          </AppButton>
        </div>
      </Card>
    </>
  )
}

export default ProfilePage
