import { useEffect } from 'react'
import AppSpinner from '@/components/AppSpinner'
import { Link, useSearchParams } from 'react-router'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import { FaEdit, FaEye } from 'react-icons/fa'
import { useAdminStore } from '@/stores/useAdminStore'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import ToggleModal from '@/components/ToggleModal'

const BookingsPage = () => {
  const [searchParams] = useSearchParams()
  const {
    fetchPaymentsByBookingStatus,
    fetchPaymentsByStatus,
    payments,
    loading,
  } = useAdminStore()

  const status = searchParams.get('status')

  const getPaymentsByStatus = async () => {
    const query = { page: 1, limit: 50 }

    if (status) return await fetchPaymentsByBookingStatus({ status }, query)

    await fetchPaymentsByStatus({ status: 'success' }, query)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getPaymentsByStatus()
  }, [status])

  return (
    <>
      <section className="p-4">
        <div className="mb-4 flex mx-auto max-w-[1000px]">
          <div className="mx-auto text-center text-blue-500 font-bold text-2xl ">
            Bookings List
          </div>
        </div>

        <div className="mb-4 flex mx-auto max-w-[1000px]">
          <ToggleModal
            currFeatureType={status}
            features={[
              { name: 'All', type: null, url: '/admin/bookings' },
              {
                name: 'Active',
                type: 'active',
                url: '/admin/bookings?status=active',
              },
              {
                name: 'Changed',
                type: 'changed',
                url: '/admin/bookings?status=changed',
              },
              {
                name: 'Cancelled',
                type: 'canceled',
                url: '/admin/bookings?status=canceled',
              },
            ]}
          />
        </div>

        <div className="mx-auto max-w-[1000px]">
          <Card styles={'bg-white overflow-auto'}>
            <table className="rounded-2xl" width="100%">
              <thead className="">
                <tr>
                  <th className="py-3 px-2"></th>
                  <th className="py-3 px-2">Passenger</th>
                  <th className="py-3 px-2">Source</th>
                  <th className="py-3 px-2">Destination</th>
                  <th className="py-3 px-2">Schedule</th>
                  <th className="py-3 px-2">Booking Status</th>
                  <th className="py-3 px-2">Payment Status</th>
                  <th className="py-3 px-2">Manage</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <AppSpinner />
                ) : (
                  payments.map((payment, index) => (
                    <tr
                      key={payment.id}
                      className="text-nowrap capitalize text-sm"
                    >
                      <td className="py-3 px-2">{index + 1}</td>
                      <td className="py-3 px-2">
                        {payment.booking?.user?.firstName}{' '}
                        {payment.booking?.user?.lastName}
                      </td>
                      <td className="py-3 px-2">
                        {payment.booking?.trip?.source}
                      </td>
                      <td className="py-3 px-2">
                        {payment.booking?.trip?.destination}
                      </td>
                      <td className="py-3 px-2">
                        {formatDateIntl(
                          payment.booking?.trip?.departureSchedule
                        )}{' '}
                        {formatTime(payment.booking?.trip?.departureSchedule)}
                      </td>
                      <td className="py-3 px-2">{payment.booking?.status}</td>
                      <td className="py-3 px-2">{payment.status}</td>
                      <td className="py-3 px-2">
                        <div className="flex">
                          <Link
                            to={`/admin/payments/${payment.id}`}
                            className="mx-1"
                          >
                            <AppButton
                              style={
                                'bg-green-500 text-white btn-sm min-w-auto'
                              }
                            >
                              <FaEye />
                            </AppButton>
                          </Link>

                          <Link
                            to={`/admin/payments/${payment.id}/edit`}
                            className="mx-1"
                          >
                            <AppButton
                              style={
                                'bg-yellow-500 text-white btn-sm min-w-auto'
                              }
                            >
                              <FaEdit />
                            </AppButton>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {payments.length < 1 && (
              <div className="p-4 text-center">
                No payment record found yet.
              </div>
            )}
          </Card>
        </div>
      </section>
    </>
  )
}
export default BookingsPage
