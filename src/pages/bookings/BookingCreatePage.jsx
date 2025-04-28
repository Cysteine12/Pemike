import AppButton from '@/components/AppButton'
import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import TripDetail from '@/features/trips/TripDetail'
import UserDetail from '@/features/user/UserDetail'
import useSessionStorage from '@/hooks/useSessionStorage'
import { useBookingStore } from '@/stores/useBookingStore'
import { useTripStore } from '@/stores/useTripStore'
import { useUserStore } from '@/stores/useUserStore'
import { getWeeksLeft } from '@/utils/getWeeksLeft'
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

  const getMatchingFare = (passengerType) => {
    const weeksLeft = getWeeksLeft(trips[0].departureSchedule)

    const matchingFareCondition = trips[0].FareCondition.filter(
      (fareCondition) => {
        if (
          fareCondition.maxWeeksBefore === null &&
          weeksLeft > fareCondition.minWeeksBefore
        )
          return true

        if (
          fareCondition.maxWeeksBefore &&
          fareCondition.maxWeeksBefore >= weeksLeft &&
          weeksLeft >= fareCondition.minWeeksBefore
        )
          return true

        return false
      }
    )

    if (passengerType === 'CHILD') {
      return matchingFareCondition[0].childPrice
    } else if (passengerType === 'ADULT_WITHOUT_INFANT') {
      return matchingFareCondition[0].adultPrice
    } else {
      return (
        matchingFareCondition[0].adultPrice +
        matchingFareCondition[0].infantPrice
      )
    }
  }

  const handlePassengerTypeChange = (seatId, passengerType) => {
    const newSeats = seats.map((seat) => {
      if (seat.id === seatId) {
        seat.passengerType = passengerType
        seat.price = getMatchingFare(passengerType)
      }
      return seat
    })
    setSeats(newSeats)
  }

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
                  <div className="my-2">
                    <div className="text-center my-2 text-blue-500">
                      Selected Seat(s)
                    </div>
                    <div>
                      {seats.map((seat) => (
                        <div
                          key={seat.id}
                          className="grid grid-cols-[15%_50%_25%_10%] items-center py-2 my-1 bg-gray-200 text-white rounded"
                        >
                          <span className="grid-p-1 px-2 text-blue-500 rounded-l">
                            {seat.seatNo}
                          </span>

                          <select
                            name="passengerType"
                            id={`passengerType_${seat.id}`}
                            className="h-fit w-auto py-1 border-1 font-normal text-gray-700 rounded lg:max-w-56"
                            defaultValue={''}
                            onChange={(e) =>
                              handlePassengerTypeChange(seat.id, e.target.value)
                            }
                            required
                          >
                            <option value="" disabled>
                              Select Passenger Type
                            </option>
                            <option value="ADULT_WITHOUT_INFANT">
                              Adult without infant
                            </option>
                            <option value="ADULT_WITH_INFANT">
                              Adult with infant
                            </option>
                            <option value="CHILD">Child</option>
                          </select>

                          <span className="grid-p-1 px-2 text-blue-500 rounded-l justify-self-end">
                            ₦{seat.price || 0}
                          </span>

                          <FaTrashAlt
                            onClick={() => handleDelete(seat.seatNo)}
                            className="flex mx-2 text-red-500 cursor-pointer justify-self-end"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="my-8 grid grid-cols-2">
                    <span className="text-blue-500">Total Price: </span>
                    <span>
                      ₦{seats.reduce((pre, curr) => pre + (curr.price || 0), 0)}
                    </span>
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
