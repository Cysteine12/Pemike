import AppButton from '@/components/AppButton'
import Card from '@/components/Card'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import {
  FaArrowAltCircleRight,
  FaBus,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { Link } from 'react-router'

const TripCard = ({ trip, source }) => {
  return (
    <Card styles={'md:mx-auto bg-white'}>
      <div className="my-3 text-center font-bold text-1xl">
        Departure Location - ({source})
      </div>
      <img src={trip.vehicle.thumbnail} alt="Vehicle Image" />
      <ul>
        <li className="my-2 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaBus className={'mt-1 mr-3'} /> Vehicle:
          </span>

          <span>
            {trip.vehicle.brand} {trip.vehicle.model} {trip.vehicle.category}
          </span>
        </li>
        <li className="my-2 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaClock className={'mt-1 mr-3'} /> Departure:
          </span>
          <span>
            {' '}
            {formatDateIntl(trip.departureSchedule)} |{' '}
            {formatTime(trip.departureSchedule)}
          </span>
        </li>
        <li className="my-2 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaMapMarkerAlt className={'mt-1 mr-3'} /> Journey:
          </span>
          <span className="flex">
            {trip.source}
            <FaArrowAltCircleRight className="mt-1 mx-2" />
            {trip.destination}
          </span>
        </li>
      </ul>

      <div className="mt-5 flex justify-end">
        <Link to={`/trips/${trip.id}`}>
          <AppButton text={'View Trip'} />
        </Link>
      </div>
    </Card>
  )
}
export default TripCard
