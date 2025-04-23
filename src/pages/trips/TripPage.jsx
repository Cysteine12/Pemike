import { useEffect } from 'react'
import { useTripStore } from '@/stores/useTripStore'
import { FaCog } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router'
import { useSeatStore } from '@/stores/useSeatStore'
import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import TripDetail from '@/features/trips/TripDetail'
import useSessionStorage from '@/hooks/useSessionStorage'
import SeatButton from '@/features/trips/SeatButton'

const TripPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { fetchTrip, trips, loading } = useTripStore()
  const {
    fetchSeatsByTrip,
    seats,
    sessionID,
    loading: loadingSeats,
  } = useSeatStore()
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
              'mx-8 py-12 px-4 bg-white rounded-2xl md:mx-auto md:min-w-100'
            }
          >
            {!loadingSeats && (
              <div className="text-center font-bold">
                Selected Seat(s):
                {seats.map((seat) => (
                  <span key={seat.id}>
                    {seat.sessionID === sessionID && (
                      <span className="mx-1">{seat.seatNo}</span>
                    )}
                  </span>
                ))}
              </div>
            )}

            {!loadingSeats && (
              <table className="mx-auto text-white">
                <tbody>
                  <tr className="table-row">
                    <td className="p-6 text-black">
                      <FaCog />
                    </td>
                    <td></td>
                    <td>
                      <SeatButton seatNo={1} />
                    </td>
                    <td>
                      <SeatButton seatNo={2} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <SeatButton seatNo={3} />
                    </td>
                    <td>
                      <SeatButton seatNo={4} />
                    </td>
                    <td>
                      <SeatButton seatNo={5} />
                    </td>
                    <td>
                      <SeatButton seatNo={6} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <SeatButton seatNo={7} />
                    </td>
                    <td>
                      <SeatButton seatNo={8} />
                    </td>
                    <td>
                      <SeatButton seatNo={9} />
                    </td>
                    <td>
                      <SeatButton seatNo={10} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <SeatButton seatNo={11} />
                    </td>
                    <td>
                      <SeatButton seatNo={12} />
                    </td>
                    <td>
                      <SeatButton seatNo={13} />
                    </td>
                    <td>
                      <SeatButton seatNo={14} />
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <br />

            {sessionID && (
              <AppButton
                onClick={handleSubmit}
                text={'Proceed'}
                style={'m-auto w-full max-w-56'}
              />
            )}
          </Card>
        </div>
      )}
    </>
  )
}
export default TripPage
