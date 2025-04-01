import { useEffect } from 'react'
import { useTripStore } from '@/stores/useTripStore'
import AppSpinner from '@/components/AppSpinner'
import useSessionStorage from '@/hooks/useSessionStorage'
import TripCard from '@/features/trips/TripCard'
import { useSearchParams } from 'react-router'
import Card from '@/components/Card'

const TripsPage = () => {
  const [searchParams] = useSearchParams()
  const { fetchTrips, searchTripsByParams, trips, loading } = useTripStore()
  let [userSearchParams] = useSessionStorage('userSearchParams')

  const getTrips = async () => {
    if (searchParams.get('source') && userSearchParams) {
      await searchTripsByParams(userSearchParams)
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
            <h4 className="my-4 text-center text-blue-500 font-bold text-2xl">
              List of Available Trips
            </h4>
            {trips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                source={searchParams.get('from')}
              />
            ))}
            {trips.length < 1 && (
              <>
                <Card>
                  No trip matches your current location.Try another location.
                </Card>
                {/* <SearchModal /> */}
              </>
            )}
          </>
        )}
      </section>
    </>
  )
}
export default TripsPage
