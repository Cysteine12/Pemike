import Card from '@/components/Card'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import {
  FaArrowAltCircleRight,
  FaBus,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const TripDetail = ({ trip }) => {
  return (
    <Card styles={'md:m-auto mx-8 mb-16 max-w-120 bg-blue-500 text-white'}>
      <ul>
        <li className="my-2 flex justify-between items-center">
          <span className="flex">
            <FaBus className={'mt-1 mr-3'} /> Vehicle:
          </span>

          <span>
            {trip.vehicle.brand} {trip.vehicle.model} {trip.vehicle.category}
          </span>
        </li>
        <hr />
        <li className="my-2 flex justify-between items-center">
          <span className="flex">
            <FaClock className={'mt-1 mr-3'} /> Departure:
          </span>
          <span>
            {' '}
            {formatDateIntl(trip.departureSchedule)} |{' '}
            {formatTime(trip.departureSchedule)}
          </span>
        </li>
        <hr />
        <li className="my-2 flex justify-between items-center">
          <span className="flex">
            <FaMapMarkerAlt className={'mt-1 mr-3'} /> Journey:
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
