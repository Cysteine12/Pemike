import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import {
  FaAngleLeft,
  FaBus,
  FaClock,
  FaDollarSign,
  FaMoneyBillWave,
} from 'react-icons/fa'

const FareConditionCard = ({ fareCondition, trip }) => {
  return (
    <div key={fareCondition.id}>
      <h5 className="text-center text-xl">{fareCondition.conditionLabel}</h5>
      <ul className="mt-8 md:my-0 md:mx-16">
        <li className="my-4 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaBus className={'mt-1 mr-3'} /> Minimum weeks before:
          </span>

          <span>{fareCondition.minWeeksBefore}</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaBus className={'mt-1 mr-3'} /> Maximum weeks before:
          </span>

          <span>{fareCondition.maxWeeksBefore ?? 'Not Set'}</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaDollarSign className={'mt-1 mr-3'} /> Adult Price:
          </span>

          <span>₦{fareCondition.adultPrice}</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaDollarSign className={'mt-1 mr-3'} /> Child Price:
          </span>

          <span>₦{fareCondition.childPrice}</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaDollarSign className={'mt-1 mr-3'} /> Infant Price:
          </span>

          <span>₦{fareCondition.infantPrice}</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span className="flex text-blue-500 items-center">
            <FaMoneyBillWave className={'mr-3'} /> Cancel Charge(
            <FaAngleLeft /> 48hours):
          </span>

          <span>{fareCondition.cancelLessThan48h}%</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span className="flex text-blue-500">
            <FaClock className={'mt-1 mr-3'} /> Last Updated:
          </span>
          <span>
            {formatDateIntl(trip.updatedAt)} | {formatTime(trip.updatedAt)}
          </span>
        </li>
      </ul>
    </div>
  )
}
export default FareConditionCard
