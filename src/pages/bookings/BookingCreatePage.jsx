import AppButton from '@/components/AppButton'
import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import TripDetail from '@/features/trips/TripDetail'
import UserDetail from '@/features/user/UserDetail'
import useSessionStorage from '@/hooks/useSessionStorage'
import { useBookingStore } from '@/stores/useBookingStore'
import { useTripStore } from '@/stores/useTripStore'
import { useUserStore } from '@/stores/useUserStore'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

const BookingConfirmPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { fetchTrip, trips, loading } = useTripStore()
  const { user } = useUserStore()
  const { createBooking } = useBookingStore()
  const [selectedSeats] = useSessionStorage('selectedSeats')

  const tripId = searchParams.get('tripId')
  const sessionToken = searchParams.get('sessionToken')

  useEffect(() => {
    if (!sessionToken || !tripId || !user) navigate(-1)
    fetchTrip(tripId)
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (formData) => {
    if (!formData.get('arrivalBox') && !formData.get('luggageBox')) return

    await createBooking({
      userId: user.id,
      seats: selectedSeats,
      sessionToken,
      tripId,
    })
  }

  return (
    <>
      <div className="mb-4 text-center font-bold text-blue-500 text-2xl">
        Passenger Manifest
      </div>

      {loading ? (
        <AppSpinner />
      ) : (
        <main className="lg:grid grid-cols-2">
          <section>
            <TripDetail trip={trips[0]} />

            <UserDetail user={user} />
          </section>

          <section>
            <Card
              styles={'md:m-auto mx-8 mb-9 max-w-120 bg-white text-gray-700'}
            >
              <h4 className="my-3 text-center font-bold text-2xl">
                Terms & Conditions
              </h4>

              <form action={handleSubmit} className="px-3">
                <div className="mb-4 flex flex-row items-start">
                  <input
                    type="checkbox"
                    name="arrivalBox"
                    id="arrivalBox"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="arrivalBox" className="ml-2">
                    You must be at the departure terminal at least 30 minutes
                    before the bus departure time, else you lose your right to
                    your selected seat(s).
                  </label>
                </div>

                <div className="mb-4 flex flex-row items-start">
                  <input
                    type="checkbox"
                    name="luggageBox"
                    id="luggageBox"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="luggageBox" className="ml-2">
                    Luggage that exceeds the standard 10kg free luggage limit is
                    classified as excess luggage. Excess luggage attracts
                    charges based on the prevailing excess luggage rates per kg.
                  </label>
                </div>
                <hr />

                <div className="my-5 font-semibold">
                  <div className="grid grid-cols-2">
                    <span className="text-blue-500">Total seats: </span>
                    <span>{selectedSeats.length}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-blue-500">Seat numbers: </span>
                    <span>
                      {selectedSeats.map((seat) => (
                        <span className="mr-2">Seat {seat.seatNo}</span>
                      ))}
                    </span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-blue-500">Total Price: </span>
                    <span>{selectedSeats.length * trips[0].fare}</span>
                  </div>
                </div>

                <AppButton
                  type="submit"
                  text={'Proceed to Payment'}
                  style={'m-auto'}
                />
              </form>
            </Card>
          </section>
        </main>
      )}
    </>
  )
}
export default BookingConfirmPage
