import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import FareConditionCard from '@/features/trips/FareConditionCard'
import TripDetail from '@/features/trips/TripDetail'
import SeatsLayout from '@/features/vehicles/SeatsLayout'
import { useAdminStore } from '@/stores/useAdminStore'
import { useTripStore } from '@/stores/useTripStore'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const TripPage = () => {
  const { id } = useParams()
  const { fetchTrip, trips, loading } = useTripStore()
  const { fetchSeatsByTrip } = useAdminStore()

  useEffect(() => {
    fetchTrip(id)
    fetchSeatsByTrip(id)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="text-center font-bold text-blue-500 text-2xl">
        Trip Details
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div className="md:px-4 mx-auto">
            <TripDetail trip={trips[0]} />

            <Card styles={'md:mx-auto mx-8 mb-9 bg-white'}>
              <SeatsLayout />
            </Card>
          </div>

          <Card
            styles={
              'mx-8 py-6 px-4 bg-white rounded-2xl md:mx-auto lg:min-w-[500px]'
            }
          >
            <h3 className="text-center font-bold text-2xl text-blue-500">
              Fare Conditions
            </h3>

            {trips[0].FareCondition?.map((fareCondition) => (
              <FareConditionCard
                key={fareCondition.id}
                fareCondition={fareCondition}
                trip={trips[0]}
              />
            ))}
          </Card>
        </div>
      )}
    </>
  )
}
export default TripPage
