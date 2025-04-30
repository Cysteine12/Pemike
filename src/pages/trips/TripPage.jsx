import { useEffect } from 'react'
import { useTripStore } from '@/stores/useTripStore'
import { useNavigate, useParams } from 'react-router'
import { useSeatStore } from '@/stores/useSeatStore'
import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import TripDetail from '@/features/trips/TripDetail'
import useSessionStorage from '@/hooks/useSessionStorage'
import SeatsLayout from '@/features/vehicles/SeatsLayout'

const TripPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { fetchTrip, trips, loading } = useTripStore()
  const { fetchSeatsByTrip, seats, sessionID } = useSeatStore()
  const [, setSelectedSeats] = useSessionStorage('selectedSeats')

  useEffect(() => {
    fetchTrip(id)
    fetchSeatsByTrip(id)
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = () => {
    setSelectedSeats(seats.filter((seat) => seat.sessionID === sessionID))

    navigate(`/bookings/create?tripId=${trips[0].id}&sessionID=${sessionID}`)
  }

  return (
    <>
      <div className="text-center font-bold text-blue-500 text-2xl">
        Available Seats
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <div className="lg:grid lg:grid-cols-2">
          <TripDetail trip={trips[0]} />

          <Card
            styles={
              'mx-8 pb-8 px-4 bg-white rounded-2xl md:mx-auto md:min-w-100'
            }
          >
            <SeatsLayout />

            {sessionID && (
              <>
                <div className="mb-2 text-center font-bold">
                  Selected Seat(s):
                  {seats.map((seat) => (
                    <span key={seat.id}>
                      {seat.sessionID === sessionID && (
                        <span className="mx-1">{seat.seatNo}</span>
                      )}
                    </span>
                  ))}
                </div>

                <AppButton
                  onClick={handleSubmit}
                  text={'Proceed'}
                  style={'m-auto w-full max-w-56'}
                />
              </>
            )}
          </Card>
        </div>
      )}
    </>
  )
}
export default TripPage
