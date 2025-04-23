import { useEffect } from 'react'
import { useTripStore } from '@/stores/useTripStore'
import AppSpinner from '@/components/AppSpinner'
import { Link, useSearchParams } from 'react-router'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaEdit,
  FaEye,
  FaTrashAlt,
} from 'react-icons/fa'

const TripsPage = () => {
  const [searchParams] = useSearchParams()
  const { fetchTrips, searchTripsByParams, trips, loading } = useTripStore()

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

  return (
    <>
      <section className="p-4">
        {loading ? (
          <AppSpinner />
        ) : (
          <>
            <h4 className="mb-4 text-center text-blue-500 font-bold text-2xl">
              List of Available Trips
            </h4>
            <div className="mb-4 text-center text-gray-700 font-bold text-lg">
              {source && <span>Search result from: {source}</span>}
            </div>
            <div className="mx-auto max-w-[1000px] lg:grid lg:grid-cols-2 lg:gap-12">
              <table className="p-5" width="100%">
                <thead className="table-header-group">
                  <tr className="table-row mx-3 my-5">
                    <th>Vehicle</th>
                    <th>Departure</th>
                    <th>Color</th>
                    <th>Status</th>
                    <th>Manage</th>
                  </tr>
                </thead>

                <tbody>
                  {trips.map((trip) => (
                    <tr
                      key={trip.id}
                      className="table-row mx-3 my-5 text-nowrap capitalize"
                    >
                      <td>
                        {trip.vehicle.brand} {trip.vehicle.model}{' '}
                        {trip.vehicle.category}
                      </td>
                      <td>
                        {formatDateIntl(trip.departureSchedule)} |{' '}
                        {formatTime(trip.departureSchedule)}
                      </td>
                      <td>
                        <span className="flex">
                          {trip.source}
                          <FaArrowAltCircleRight className="mt-1 mx-2" />
                          {trip.destination}
                        </span>
                      </td>
                      <td>
                        <div className="flex">
                          <select id="selectedValue" className="form-control">
                            <option value="available">Available</option>
                            <option value="in-use">In-use</option>
                            <option value="unavailable">Unavailable</option>
                          </select>
                          <AppButton
                            className="ml-1"
                            type="button"
                            color="bg-warning btn-sm"
                          >
                            <FaArrowRight />
                          </AppButton>
                        </div>
                      </td>
                      <td>
                        <div className="flex">
                          <Link to={`/admin/trips/${trip.id}`} className="mx-1">
                            <AppButton color="bg-green-500 text-white w-12">
                              <FaEye />
                            </AppButton>
                          </Link>

                          <Link
                            to={`/admin/trips/${trip.id}/edit`}
                            className="mx-1"
                          >
                            <AppButton color="bg-warning text-white btn-sm">
                              <FaEdit />
                            </AppButton>
                          </Link>

                          <AppButton
                            style={'bg-red-500 text-white btn-sm'}
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
            </div>
            {trips.length < 1 && (
              <>
                <Card>
                  No trip matches your current location.Try another location.
                </Card>
              </>
            )}
          </>
        )}
      </section>
    </>
  )
}
export default TripsPage
