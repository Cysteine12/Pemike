import { useAdminStore } from '@/stores/useAdminStore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const AdminSeatButton = ({ seatNo }) => {
  const { id } = useParams()
  const [seatStatusClass, setSeatStatusClass] = useState()
  const { reserveSeat } = useAdminStore()
  const seat = useAdminStore((state) =>
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
    if (seat.status === 'BOOKED' && !seat.bookingId) {
      return 'bg-green-500 hover:cursor-pointer'
    }
    return 'bg-blue-400 hover:cursor-not-allowed'
  }

  const hasBeenReserved = (currentSeatNo) => {
    return (
      seat &&
      seat.seatNo === currentSeatNo &&
      seat.status !== 'AVAILABLE' &&
      seat.bookingId
    )
  }

  const handleClick = async () => {
    let newSeat = {
      tripId: id,
      seatNo: seat.seatNo,
      status: seat.status === 'AVAILABLE' ? 'BOOKED' : 'AVAILABLE',
    }
    const res = await reserveSeat(newSeat)
    if (!res?.success) return
  }

  return (
    <button
      onClick={handleClick}
      className={`m-4 my-5 py-1 w-8 rounded ${seatStatusClass}`}
      disabled={hasBeenReserved(seatNo)}
    >
      {seatNo}
    </button>
  )
}

export default AdminSeatButton
