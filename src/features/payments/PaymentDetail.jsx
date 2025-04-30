import Card from '@/components/Card'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import { FaChair, FaClock, FaMoneyBill, FaTicketAlt } from 'react-icons/fa'

const PaymentDetail = ({ children, payment }) => {
  return (
    <Card
      styles={
        'md:mx-auto mx-8 mb-9 lg:min-w-[500px] bg-white font-bold text-gray-700 h-fit'
      }
    >
      <ul>
        <li className="my-3 flex justify-between">
          <span className="flex text-blue-600">
            <FaTicketAlt className={'mt-1 mr-3'} /> Payment Status
          </span>
          <span>{payment.status}</span>
        </li>

        <li className="my-3 flex justify-between">
          <span className="flex text-blue-600">
            <FaMoneyBill className={'mt-1 mr-3'} /> Paid Amount
          </span>
          <span>₦{payment.amount}</span>
        </li>

        <li className="my-3 flex justify-between">
          <span className="flex text-blue-600">
            <FaClock className={'mt-1 mr-3'} /> Payment Date
          </span>
          <span>
            {formatDateIntl(payment.updatedAt)} |{' '}
            {formatTime(payment.updatedAt)}
          </span>
        </li>

        {payment.booking?.trip?.Seat && (
          <li className="my-3 flex justify-between">
            <span className="flex text-blue-600">
              <FaChair className={'mt-1 mr-3'} /> Seat Number(s)
            </span>
            <span>
              {payment.booking?.trip?.Seat?.map((seat) => (
                <span key={seat.id} className="mx-1 font-semibold">
                  {seat.seatNo}
                </span>
              ))}
            </span>
          </li>
        )}
      </ul>
      {children}
    </Card>
  )
}
export default PaymentDetail
