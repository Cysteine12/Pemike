import { useEffect } from 'react'
import { useTripStore } from '@/stores/useTripStore'
import { FaCog } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router'
import { useSeatStore } from '@/stores/useSeatStore'
import AppSpinner from '@/components/AppSpinner'
import { useCountdown } from '@/hooks/useCountdown'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import TripDetail from '@/features/trips/TripDetail'
import useSessionStorage from '@/hooks/useSessionStorage'

const TripPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { fetchTrip, trips, loading } = useTripStore()
  const { fetchSeatsByTrip, reserveSeat, seats, sessionToken } = useSeatStore()
  const { isCountdownActive, startCountdown } = useCountdown()
  const [, setSelectedSeats] = useSessionStorage('selectedSeats')

  useEffect(() => {
    fetchTrip(id)
    fetchSeatsByTrip(id)
    window.scrollTo(0, 0)
  }, [])

  const hasBeenReserved = (currentSeatNo) => {
    return seats.find(({ seatNo, status }) => {
      return seatNo === currentSeatNo && status !== 'available'
    })
  }

  const handleClick = async (e, seatNo) => {
    e.target.disabled = true

    let newSeat = {
      tripId: id,
      seatNo,
      sessionToken,
    }
    const res = await reserveSeat(newSeat)
    if (!res?.success) return

    if (!isCountdownActive) startCountdown()
  }

  const handleSubmit = () => {
    setSelectedSeats(seats.filter((seat) => seat.sessionToken === sessionToken))

    navigate(
      `/bookings/create?tripId=${trips[0].id}&sessionToken=${sessionToken}`
    )
  }

  return (
    <>
      <br />
      <div className="text-center font-bold text-blue-500 text-2xl">
        Available Seats
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <div className="lg:grid grid-cols-2">
          <TripDetail trip={trips[0]} />

          <Card styles={'m-auto py-12 px-4 bg-white rounded-2xl max-w-80 '}>
            {seats.length > 0 && (
              <div className="text-center font-bold">
                Selected Seat(s):
                {seats.map((seat) => (
                  <span key={seat.id}>
                    {seat.sessionToken === sessionToken && (
                      <span className="mx-1">{seat.seatNo}</span>
                    )}
                  </span>
                ))}
              </div>
            )}

            <table className="m-auto text-white">
              <tbody>
                <tr className="table-row">
                  <td className="p-6 text-black">
                    <FaCog />
                  </td>
                  <td></td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 1)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(1) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(1)}
                    >
                      1
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 2)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(2) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(2)}
                    >
                      2
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 3)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(3) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(3)}
                    >
                      3
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 4)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(4) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(4)}
                    >
                      4
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 5)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(5) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(5)}
                    >
                      5
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 6)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(6) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(6)}
                    >
                      6
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 7)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(7) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(7)}
                    >
                      7
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 8)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(8) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(8)}
                    >
                      8
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 9)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(9) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(9)}
                    >
                      9
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 10)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(10) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(10)}
                    >
                      10
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 11)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(11) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(11)}
                    >
                      11
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 12)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(12) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(12)}
                    >
                      12
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 13)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(13) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(13)}
                    >
                      13
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleClick(e, 14)}
                      className={`m-4 my-5 py-1 w-8 hover:cursor-pointer hover:bg-blue-500 rounded ${
                        hasBeenReserved(14) ? 'bg-blue-400' : 'bg-gray-400'
                      }`}
                      disabled={hasBeenReserved(14)}
                    >
                      14
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            {sessionToken && (
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
