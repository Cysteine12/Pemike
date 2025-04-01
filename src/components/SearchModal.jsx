import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useTripStore } from '@/stores/useTripStore'
import useSessionStorage from '../hooks/useSessionStorage'
import { FaSearch } from 'react-icons/fa'
import AppButton from './AppButton'

const SearchModal = () => {
  const navigate = useNavigate()
  const [, setUserSearchParams] = useSessionStorage('userSearchParams')
  const { fetchTrips, trips } = useTripStore()

  useEffect(() => {
    const query = { page: null, limit: null }
    fetchTrips(query)
  }, [])

  const handleSubmit = async (formData) => {
    const tripType = formData.get('tripType')
    const departure = formData.get('departure')
    const destination = formData.get('destination')
    const tripDate = formData.get('tripDate')

    const searchParams = {
      tripType,
      departure,
      destination,
      tripDate,
    }

    setUserSearchParams(searchParams)
    navigate(`/trips?source=${encodeURIComponent(departure)}`)
  }

  return (
    <>
      <section className="p-4 flex justify-center">
        <div className="p-4 bg-white rounded-lg shadow-xl md:max-w-80">
          <h4 className="text-blue-500 text-center font-bold text-2xl">
            Search for a Trip
          </h4>
          <form action={handleSubmit}>
            <div className="my-1">
              <label htmlFor="tripType" className="text-blue-500">
                One way or Round Trip*
              </label>
              <select
                name="tripType"
                id="tripType"
                className="my-1 p-2 w-full border-2 border-blue-200 rounded"
                required
              >
                <option value="One Way Trip">One way Trip</option>
                <option value="Round Trip">Round Trip</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="my-1">
                <label htmlFor="departure" className="text-blue-500">
                  Departure*
                </label>
                <select
                  name="departure"
                  id="departure"
                  className="my-1 p-2 w-full border-2 border-blue-200 rounded"
                  required
                >
                  {trips.map((trip) => (
                    <option key={trip.id} value={trip.source}>
                      {trip.source}
                    </option>
                  ))}
                </select>
              </div>

              <div className="my-1">
                <label htmlFor="destination" className="text-blue-500">
                  Destination*
                </label>
                <select
                  name="destination"
                  id="destination"
                  className="my-1 p-2 w-full border-2 border-blue-200 rounded"
                  required
                >
                  {trips.map((trip) => (
                    <option key={trip.id} value={trip.destination}>
                      {trip.destination}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="my-1">
              <label htmlFor="tripDate" className="text-blue-500">
                Trip Date
              </label>
              <input
                type="date"
                name="tripDate"
                min={new Date().toISOString().split('T')[0]}
                id="tripDate"
                className="my-1 p-1 w-full border-2 border-blue-200 rounded"
                required
              />
            </div>

            <div className="flex justify-center">
              <AppButton type="submit" style="m-2">
                <FaSearch className="mr-1" /> Search
              </AppButton>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default SearchModal
