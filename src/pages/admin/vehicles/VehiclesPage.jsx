import { useEffect } from 'react'
import AppSpinner from '@/components/AppSpinner'
import { Link, useNavigate, useSearchParams } from 'react-router'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import { FaEdit, FaEye, FaFileAlt, FaTrashAlt } from 'react-icons/fa'
import { useVehicleStore } from '@/stores/useVehicleStore'
import ToggleModal from '@/components/ToggleModal'
import SearchBox from '@/components/SearchBox'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'

const VehiclesPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const {
    fetchVehicles,
    fetchVehiclesByStatus,
    searchVehiclesByLicense,
    deleteVehicle,
    vehicles,
    loading,
  } = useVehicleStore()

  const status = searchParams.get('status')
  const licenseNo = searchParams.get('licenseNo')

  const getVehicles = async () => {
    const query = { page: 1, limit: 10 }

    if (status) return await fetchVehiclesByStatus({ status }, query)
    if (licenseNo) return await searchVehiclesByLicense({ licenseNo }, query)

    await fetchVehicles(query)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getVehicles()
  }, [status, licenseNo])

  const handleDelete = async (vehicleId) => {
    await deleteVehicle(vehicleId)
  }

  return (
    <>
      <section className="p-4">
        <div className="mb-4 flex mx-auto max-w-[1000px]">
          <div className="mx-auto text-blue-500 font-bold text-2xl ">
            Vehicles List
          </div>
          <Link
            to={'/admin/vehicles/create'}
            className={
              'flex items-center self-end bg-blue-500 px-2 py-1 text-white rounded'
            }
          >
            <FaFileAlt /> Add New Vehicle
          </Link>
        </div>

        <div className="mb-4 flex mx-auto max-w-[1000px]">
          <SearchBox
            placeholder={'Search for a license number...'}
            searchText={licenseNo}
            handleSearch={(text) =>
              navigate(`/admin/vehicles?licenseNo=${text}`)
            }
          />

          <ToggleModal
            currFeatureType={status}
            features={[
              { name: 'All', type: null, url: '/admin/vehicles' },
              {
                name: 'Available',
                type: 'available',
                url: '/admin/vehicles?status=available',
              },
              {
                name: 'Unavailable',
                type: 'unavailable',
                url: '/admin/vehicles?status=unavailable',
              },
            ]}
          />
        </div>

        <div className="mx-auto max-w-[1000px]">
          <Card styles={'bg-white overflow-auto'}>
            <table className="mx-auto rounded-2xl" width="100%">
              <thead className="text-left">
                <tr>
                  <th className="py-3 px-2"></th>
                  <th className="py-3 px-2">Vehicle</th>
                  <th className="py-3 px-2">Capacity</th>
                  <th className="py-3 px-2">License</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2">Updated</th>
                  <th className="py-3 px-2">Manage</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <AppSpinner />
                ) : (
                  vehicles.map((vehicle, index) => (
                    <tr
                      key={vehicle.id}
                      className="text-nowrap capitalize text-sm"
                    >
                      <td className="py-3 px-2">{index + 1}.</td>
                      <td className="py-3 px-2">
                        {vehicle.brand} {vehicle.model} {vehicle.category}
                      </td>
                      <td className="py-3 px-2">
                        {vehicle.totalPassengerSeat}
                      </td>
                      <td className="py-3 px-2">{vehicle.licenseNo}</td>
                      <td className="py-3 px-2">
                        {vehicle.available ? 'Available' : 'Unavailable'}
                      </td>
                      <td className="py-3 px-2">
                        {formatDateIntl(vehicle.updatedAt)}
                        {formatTime(vehicle.updatedAt)}
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex">
                          <Link
                            to={`/admin/vehicles/${vehicle.id}`}
                            className="mx-1"
                          >
                            <AppButton
                              style={
                                'bg-green-500 text-white btn-sm min-w-auto'
                              }
                            >
                              <FaEye />
                            </AppButton>
                          </Link>

                          <Link
                            to={`/admin/vehicles/${vehicle.id}/edit`}
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

                          <AppButton
                            onClick={() => handleDelete(vehicle.id)}
                            style={'bg-red-500 text-white btn-sm min-w-auto'}
                            className="mx-1"
                          >
                            <FaTrashAlt />
                          </AppButton>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {vehicles.length < 1 && (
              <div className="p-4 text-center">
                No vehicle record found yet.
              </div>
            )}
          </Card>
        </div>
      </section>
    </>
  )
}
export default VehiclesPage
