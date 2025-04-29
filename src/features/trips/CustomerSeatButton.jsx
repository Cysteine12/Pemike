// import { useCountdown } from '@/hooks/useCountdown'
import { useCountdownStore } from '@/stores/useCountdownStore'
import { useSeatStore } from '@/stores/useSeatStore'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const CustomerSeatButton = ({ seatNo }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isCountdownActive, startCountdown } = useCountdownStore()
  const [seatStatusClass, setSeatStatusClass] = useState()
  const { reserveSeat, sessionID } = useSeatStore()
  const seat = useSeatStore((state) =>
    state.seats.find((seat) => seat.seatNo === seatNo)
  ) ?? {
    seatNo,
    status: 'AVAILABLE',
  }

  useEffect(() => {
    setSeatStatusClass(getSeatStatusClass())
  }, [seat])

  const getSeatStatusClass = () => {
    if (!seat || seat.status === 'AVAILABLE') {
      return 'bg-gray-400 hover:cursor-pointer hover:bg-blue-500'
    }
    if (seat.sessionID === sessionID && seat.status === 'RESERVED') {
      return 'bg-green-500 hover:cursor-not-allowed'
    }
    return 'bg-blue-400 hover:cursor-not-allowed'
  }

  const hasBeenReserved = (currentSeatNo) => {
    return seat && seat.seatNo === currentSeatNo && seat.status !== 'AVAILABLE'
  }

  const handleClick = async (e, seatNo) => {
    e.target.disabled = true

    let newSeat = {
      tripId: id,
      seatNo,
      sessionID,
    }
    const res = await reserveSeat(newSeat)
    if (!res?.success) return

    if (!isCountdownActive) startCountdown(navigate)
  }

  return (
    <button
      onClick={(e) => handleClick(e, seatNo)}
      className={`m-4 my-5 py-1 w-8 rounded ${seatStatusClass}`}
      disabled={hasBeenReserved(seatNo)}
    >
      {seatNo}
    </button>
  )
}

export default CustomerSeatButton
