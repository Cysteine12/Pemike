import { useEffect } from 'react'
import AppSpinner from '@/components/AppSpinner'
import { Link } from 'react-router'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import { FaEdit, FaEye } from 'react-icons/fa'
import { useAdminStore } from '@/stores/useAdminStore'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'

const PaymentsPage = () => {
  const { fetchPayments, payments, loading } = useAdminStore()

  const getPayments = async () => {
    const query = { page: 1, limit: 10 }
    await fetchPayments({ status: 'success' }, query)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getPayments()
  }, [])

  return (
    <>
      <section className="p-4">
        {loading ? (
          <AppSpinner />
        ) : (
          <>
            <div className="mb-4 flex mx-auto max-w-[1000px]">
              <div className="mx-auto text-center text-blue-500 font-bold text-2xl ">
                Payments List
              </div>
            </div>

            <div className="mx-auto max-w-[1000px]">
              <Card styles={'bg-white overflow-auto'}>
                <table className="rounded-2xl" width="100%">
                  <thead className="">
                    <tr>
                      <th className="py-3 px-2"></th>
                      <th className="py-3 px-2">Passenger</th>
                      <th className="py-3 px-2">Amount</th>
                      <th className="py-3 px-2">Reference</th>
                      <th className="py-3 px-2">Status</th>
                      <th className="py-3 px-2">Date</th>
                      <th className="py-3 px-2">Manage</th>
                    </tr>
                  </thead>

                  <tbody>
                    {payments.map((payment, index) => (
                      <tr
                        key={payment.id}
                        className="text-nowrap capitalize text-sm"
                      >
                        <td className="py-3 px-2">{index + 1}</td>
                        <td className="py-3 px-2">
                          {payment.booking?.user?.firstName}{' '}
                          {payment.booking?.user?.lastName}
                        </td>
                        <td className="py-3 px-2">{payment.amount}</td>
                        <td className="py-3 px-2">{payment.reference}</td>
                        <td className="py-3 px-2">{payment.status}</td>
                        <td className="py-3 px-2">
                          {formatDateIntl(payment.updatedAt)}{' '}
                          {formatTime(payment.updatedAt)}
                        </td>
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
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {payments.length < 1 && (
                  <div className="p-4 text-center">
                    No payment record found yet.
                  </div>
                )}
              </Card>
            </div>
          </>
        )}
      </section>
    </>
  )
}
export default PaymentsPage
