import { FaCog } from 'react-icons/fa'
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
  )
}
export default SeatsLayout
