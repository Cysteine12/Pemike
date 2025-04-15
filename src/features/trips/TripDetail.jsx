import Card from '@/components/Card'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import {
  FaArrowAltCircleRight,
  FaBus,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBill,
} from 'react-icons/fa'

const TripDetail = ({ trip }) => {
  return (
    <Card
      styles={
        'md:mx-auto mx-8 mb-9 lg:min-w-[500px] border-1 border-blue-400 bg-blue-100 font-bold text-gray-700 h-fit'
      }
    >
      <ul>
        <li className="my-3 flex justify-between">
          <span className="flex text-blue-600">
            <FaBus className={'mt-1 mr-3'} /> Vehicle
          </span>
          <span>
            {trip.vehicle.brand} {trip.vehicle.model} {trip.vehicle.category}
          </span>
        </li>

        <li className="my-3 flex justify-between">
          <span className="flex text-blue-600">
            <FaClock className={'mt-1 mr-3'} /> Departure
          </span>
          <span>
            {formatDateIntl(trip.departureSchedule)} |{' '}
            {formatTime(trip.departureSchedule)}
          </span>
        </li>

        <li className="my-3 flex justify-between">
          <span className="flex text-blue-600">
            <FaMoneyBill className={'mt-1 mr-3'} /> Fare
          </span>
          <span className="flex">₦{trip.fare}</span>
        </li>

        <li className="my-3 flex justify-between">
          <span className="flex text-blue-600">
            <FaMapMarkerAlt className={'mt-1 mr-3'} /> Journey
          </span>
          <span className="flex">
            {trip.source}
            <FaArrowAltCircleRight className="mt-1 mx-2" />
            {trip.destination}
          </span>
        </li>
      </ul>
    </Card>
  )
}
export default TripDetail
