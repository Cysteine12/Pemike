import { useEffect } from 'react'
import { useTripStore } from '@/stores/useTripStore'
import AppSpinner from '@/components/AppSpinner'
import { Link, useNavigate, useSearchParams } from 'react-router'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import {
  FaArrowAltCircleRight,
  FaEdit,
  FaEye,
  FaFileAlt,
  FaTrashAlt,
} from 'react-icons/fa'

const TripsPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { fetchTrips, searchTripsByParams, deleteTrip, trips, loading } =
    useTripStore()

  const source = searchParams.get('source')

  const getTrips = async () => {
    if (searchParams.get('source')) {
      await searchTripsByParams({ source })
    } else {
      const query = { page: 1, limit: 10 }
      await fetchTrips(query)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getTrips()
  }, [])

  const handleDelete = async (tripId) => {
    await deleteTrip(tripId)
  }

  return (
    <>
      <section className="p-4">
        {loading ? (
          <AppSpinner />
        ) : (
          <>
            <div className="mb-4 flex mx-auto max-w-[1000px]">
              <div className="mx-auto text-center text-blue-500 font-bold text-2xl ">
                List of Available Trips
              </div>
              <AppButton
                onClick={() => navigate('/admin/trips/create')}
                style={'flex items-center self-end'}
              >
                <FaFileAlt /> Add New Trip
              </AppButton>
            </div>
            <div className="mb-4 text-center text-gray-700 font-bold text-lg">
              {source && <span>Search result from: {source}</span>}
            </div>
            <div className="mx-auto max-w-[1000px]">
              <Card styles={'bg-white overflow-auto'}>
                <table className="rounded-2xl" width="100%">
                  <thead className="">
                    <tr className="py-3 px-5">
                      <th className="py-3 px-2"></th>
                      <th className="py-3 px-2">Vehicle</th>
                      <th className="py-3 px-2">Departure</th>
                      <th className="py-3 px-2">Journey</th>
                      <th className="py-3 px-2">Updated</th>
                      <th className="py-3 px-2">Manage</th>
                    </tr>
                  </thead>

                  <tbody>
                    {trips.map((trip, index) => (
                      <tr
                        key={trip.id}
                        className="text-nowrap capitalize text-sm"
                      >
                        <td className="py-3 px-2">{index + 1}</td>
                        <td className="py-3 px-2">
                          {trip.vehicle.brand} {trip.vehicle.model}{' '}
                          {trip.vehicle.category}
                        </td>
                        <td className="py-3 px-2">
                          {formatDateIntl(trip.departureSchedule)} |{' '}
                          {formatTime(trip.departureSchedule)}
                        </td>
                        <td className="py-3 px-2">
                          <span className="flex">
                            {trip.source}
                            <FaArrowAltCircleRight className="mt-1 mx-2" />
                            {trip.destination}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          {formatDateIntl(trip.updatedAt)}
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex">
                            <Link
                              to={`/admin/trips/${trip.id}`}
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
                              to={`/admin/trips/${trip.id}/edit`}
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
                              onClick={() => handleDelete(trip.id)}
                              style={'bg-red-500 text-white btn-sm min-w-auto'}
                              className="mx-1"
                            >
                              <FaTrashAlt />
                            </AppButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {trips.length < 1 && (
                  <div className="p-4 text-center">
                    No trip record found yet.
                  </div>
                )}
              </Card>
            </div>
          </>
        )}
      </section>
    </>
  )
}
export default TripsPage
