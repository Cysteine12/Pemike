import AppButton from '@/components/AppButton'
import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import TripDetail from '@/features/trips/TripDetail'
import UserDetail from '@/features/user/UserDetail'
import useSessionStorage from '@/hooks/useSessionStorage'
import { useBookingStore } from '@/stores/useBookingStore'
import { useTripStore } from '@/stores/useTripStore'
import { useUserStore } from '@/stores/useUserStore'
import { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate, useSearchParams } from 'react-router'

const BookingConfirmPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user } = useUserStore()
  const { fetchTrip, trips, loading } = useTripStore()
  const { createBooking } = useBookingStore()
  const [selectedSeats] = useSessionStorage('selectedSeats')
  const [seats, setSeats] = useState(selectedSeats)

  const tripId = searchParams.get('tripId')
  const sessionID = searchParams.get('sessionID')

  useEffect(() => {
    if (!sessionID || !tripId || selectedSeats?.length < 1) navigate(-1)
    fetchTrip(tripId)
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (formData) => {
    if (!formData.get('arrivalBox') && !formData.get('luggageBox')) return

    await createBooking({
      seats,
      sessionID,
      tripId,
    })
  }

  const handleDelete = async (seatNo) => {
    setSeats(seats.filter((seat) => seat.seatNo !== seatNo))
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
          <section className="mx-auto max-w-120">
            <TripDetail trip={trips[0]} />
            <br />
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
                  <div className="my-2 grid grid-cols-2">
                    <span className="text-blue-500">Total seats: </span>
                    <span>{seats.length}</span>
                  </div>
                  <div className="my-2 grid grid-cols-2">
                    <span className="text-blue-500">Seat numbers: </span>
                    <span>
                      {seats.map((seat) => (
                        <div
                          key={seat.id}
                          className="flex justify-between my-1 bg-gray-200 text-white rounded"
                        >
                          <span className="p-1 px-2 text-blue-500 rounded-l">
                            {seat.seatNo}
                          </span>
                          <FaTrashAlt
                            onClick={() => handleDelete(seat.seatNo)}
                            className="mt-2 mr-2 text-red-500 cursor-pointer"
                          />
                        </div>
                      ))}
                    </span>
                  </div>
                  <div className="my-2 grid grid-cols-2">
                    <span className="text-blue-500">Total Price: </span>
                    <span>₦{seats.length * trips[0].fare}</span>
                  </div>
                </div>

                <AppButton
                  type="submit"
                  text={'Proceed to Payment'}
                  style={'m-auto'}
                  disabled={seats.length < 1}
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
