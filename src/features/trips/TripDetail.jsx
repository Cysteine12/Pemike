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
  const lowestPrice = trip.FareCondition?.reduce((pre, curr) => {
    if (curr.childPrice < pre) return curr.childPrice
    return pre
  }, trip.FareCondition[0].childPrice)

  const highestPrice = trip.FareCondition?.reduce((pre, curr) => {
    if (curr.adultPrice > pre) return curr.adultPrice
    return pre
  }, 0)

  const priceRange = `₦${lowestPrice} - ₦${highestPrice}`

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
            {trip.vehicle?.brand} {trip.vehicle?.model} {trip.vehicle?.category}
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
          {lowestPrice && (
            <>
              <span className="flex text-blue-600">
                <FaMoneyBill className={'mt-1 mr-3'} /> Fare Range
              </span>
              <span className="flex">{priceRange}</span>
            </>
          )}
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
