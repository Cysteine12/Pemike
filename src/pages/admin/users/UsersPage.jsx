import { useEffect } from 'react'
import AppSpinner from '@/components/AppSpinner'
import { Link, useNavigate, useSearchParams } from 'react-router'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import { FaEdit, FaEye, FaFileAlt } from 'react-icons/fa'
import { useAdminStore } from '@/stores/useAdminStore'
import ToggleModal from '@/components/ToggleModal'
import SearchBox from '@/components/SearchBox'

const UsersPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { fetchUsers, fetchUsersByRole, searchUsersByName, users, loading } =
    useAdminStore()

  const role = searchParams.get('role')
  const name = searchParams.get('name')

  const getUsers = async () => {
    const query = { page: 1, limit: 10 }

    if (role) return await fetchUsersByRole({ role }, query)
    if (name) return await searchUsersByName({ name }, query)

    await fetchUsers(query)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getUsers()
  }, [role, name])

  return (
    <>
      <section className="p-4">
        <div className="mb-4 flex mx-auto max-w-[1000px]">
          <div className="mx-auto text-center text-blue-500 font-bold text-2xl ">
            Users List
          </div>
          <Link
            to={'/admin/users/create'}
            className={
              'flex items-center self-end bg-blue-500 px-2 py-1 text-white rounded'
            }
          >
            <FaFileAlt /> Add New User
          </Link>
        </div>

        <div className="mb-4 md:flex mx-auto max-w-[1000px]">
          <SearchBox
            placeholder={'Search for a name...'}
            searchText={name}
            handleSearch={(text) => navigate(`/admin/users?name=${text}`)}
          />

          <ToggleModal
            currFeatureType={role}
            features={[
              { name: 'All', type: null, url: '/admin/users' },
              {
                name: 'Customers',
                type: 'customer',
                url: '/admin/users?role=customer',
              },
              {
                name: 'Drivers',
                type: 'driver',
                url: '/admin/users?role=driver',
              },
            ]}
          />
        </div>

        <div className="mx-auto max-w-[1000px]">
          <Card styles={'bg-white overflow-auto'}>
            <table className="rounded-2xl" width="100%">
              <thead className="text-left">
                <tr>
                  <th className="py-3 px-2"></th>
                  <th className="py-3 px-2">Name</th>
                  <th className="py-3 px-2">Email</th>
                  <th className="py-3 px-2">Phone</th>
                  <th className="py-3 px-2">Gender</th>
                  <th className="py-3 px-2">Role</th>
                  <th className="py-3 px-2">Manage</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <AppSpinner />
                ) : (
                  users.map((user, index) => (
                    <tr
                      key={user.id}
                      className="text-nowrap capitalize text-sm"
                    >
                      <td className="py-3 px-2">{index + 1}</td>
                      <td className="py-3 px-2">
                        {user.firstName} {user.lastName}
                      </td>
                      <td className="py-3 px-2 lowercase">{user.email}</td>
                      <td className="py-3 px-2">{user.phone}</td>
                      <td className="py-3 px-2">{user.gender}</td>
                      <td className="py-3 px-2">{user.role}</td>
                      <td className="py-3 px-2">
                        <div className="flex">
                          <Link to={`/admin/users/${user.id}`} className="mx-1">
                            <AppButton
                              style={
                                'bg-green-500 text-white btn-sm min-w-auto'
                              }
                            >
                              <FaEye />
                            </AppButton>
                          </Link>

                          <Link
                            to={`/admin/users/${user.id}/edit`}
                            className="mx-1"
                          >
                            <AppButton
                              style={
                                'bg-yellow-500 text-white btn-sm min-w-auto'
                              }
                            >
                              <FaEdit />
                            </AppButton>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {users.length < 1 && (
              <div className="p-4 text-center">No user record found yet.</div>
            )}
          </Card>
        </div>
      </section>
    </>
  )
}
export default UsersPage
