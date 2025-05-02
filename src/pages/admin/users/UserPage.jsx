import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import { useAdminStore } from '@/stores/useAdminStore'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import { useEffect } from 'react'
import {
  FaClock,
  FaMailBulk,
  FaPhoneAlt,
  FaUser,
  FaUserFriends,
  FaUserGraduate,
} from 'react-icons/fa'
import { useParams } from 'react-router'

const UserPage = () => {
  const { id } = useParams()
  const { fetchUser, users, loading } = useAdminStore()

  useEffect(() => {
    fetchUser(id)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="text-center font-bold text-blue-500 text-2xl">
        User Details
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <Card
          styles={
            'md:grid md:grid-cols-2 md:gap-10 mx-8 py-6 px-4 bg-white rounded-2xl md:mx-auto md:min-w-100  md:max-w-300'
          }
        >
          <ul className="mt-8 md:my-0 md:mx-16">
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaUser className={'mt-1 mr-3'} /> Name:
              </span>

              <span>
                {users[0].firstName} {users[0].lastName}
              </span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaMailBulk className={'mt-1 mr-3'} /> Email:
              </span>

              <span>{users[0].email}</span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaPhoneAlt className={'mt-1 mr-3'} /> Phone:
              </span>

              <span>{users[0].phone}</span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaUserGraduate className={'mt-1 mr-3'} /> Role:
              </span>

              <span>{users[0].role}</span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaUserFriends className={'mt-1 mr-3'} /> Gender:
              </span>

              <span>{users[0].gender}</span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaClock className={'mt-1 mr-3'} /> Last Updated:
              </span>
              <span>
                {formatDateIntl(users[0].updatedAt)} |{' '}
                {formatTime(users[0].updatedAt)}
              </span>
            </li>
          </ul>
        </Card>
      )}
    </>
  )
}
export default UserPage
