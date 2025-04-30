import { FaCog, FaSquare } from 'react-icons/fa'
import CustomerSeatButton from '../trips/CustomerSeatButton'
import { useAuthStore } from '@/stores/useAuthStore'
import AdminSeatButton from '../trips/AdminSeatButton'

const SeatsLayout = () => {
  const userRole = useAuthStore((state) => state.userRole())

  const SeatButton = ({ seatNo }) => {
    if (userRole === 'ADMIN') return <AdminSeatButton seatNo={seatNo} />
    return <CustomerSeatButton seatNo={seatNo} />
  }

  return (
    <>
      <div className="p-5 text-center">
        <h4 className="text-2xl text-blue-500">Current Seat Map</h4>
        <span>Select your preferred seat(s) below</span>
      </div>

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
          <tr>
            <td>
              <SeatButton seatNo={15} />
            </td>
            <td>
              <SeatButton seatNo={16} />
            </td>
            <td>
              <SeatButton seatNo={17} />
            </td>
            <td>
              <SeatButton seatNo={18} />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-evenly m-5">
        <span className="flex items-center">
          <FaSquare className="mx-2 text-gray-500" /> Available
        </span>
        <span className="flex items-center">
          <FaSquare className="mx-2 text-green-500" /> Reserved
        </span>
        <span className="flex items-center">
          <FaSquare className="mx-2 text-blue-500" /> Booked
        </span>
      </div>
    </>
  )
}
export default SeatsLayout
