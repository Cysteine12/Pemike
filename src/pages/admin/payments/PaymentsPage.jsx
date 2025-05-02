import { useEffect } from 'react'
import AppSpinner from '@/components/AppSpinner'
import { Link, useNavigate, useSearchParams } from 'react-router'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'
import { FaEye } from 'react-icons/fa'
import { useAdminStore } from '@/stores/useAdminStore'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import ToggleModal from '@/components/ToggleModal'
import SearchBox from '@/components/SearchBox'

const PaymentsPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const {
    fetchPayments,
    fetchPaymentsByStatus,
    searchPaymentsByReference,
    payments,
    loading,
  } = useAdminStore()

  const status = searchParams.get('status')
  const reference = searchParams.get('reference')

  const getPayments = async () => {
    const query = { page: 1, limit: 10 }

    if (status) return await fetchPaymentsByStatus({ status }, query)
    if (reference) return await searchPaymentsByReference({ reference }, query)

    await fetchPayments({ status: 'success' }, query)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getPayments()
  }, [status, reference])

  return (
    <section className="p-4">
      <div className="mb-4 flex mx-auto max-w-[1000px]">
        <div className="mx-auto text-center text-blue-500 font-bold text-2xl ">
          Payments List
        </div>
      </div>

      <div className="mb-4 md:flex mx-auto max-w-[1000px]">
        <SearchBox
          placeholder={'Search for a reference number...'}
          searchText={reference}
          handleSearch={(text) => navigate(`/admin/payments?reference=${text}`)}
        />

        <ToggleModal
          currFeatureType={status}
          features={[
            { name: 'All', type: null, url: '/admin/payments' },
            {
              name: 'Success',
              type: 'success',
              url: '/admin/payments?status=success',
            },
            {
              name: 'Pending',
              type: 'pending',
              url: '/admin/payments?status=pending',
            },
          ]}
        />
      </div>

      <div className="mx-auto max-w-[1000px]">
        <Card styles={'bg-white overflow-auto'}>
          <table className="rounded-2xl" width="100%">
            <thead className="text-left">
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
              {loading ? (
                <AppSpinner />
              ) : (
                payments.map((payment, index) => (
                  <tr
                    key={payment.id}
                    className="text-nowrap capitalize text-sm"
                  >
                    <td className="py-3 px-2">{index + 1}.</td>
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
                            style={'bg-green-500 text-white btn-sm min-w-auto'}
                          >
                            <FaEye />
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
            <div className="p-4 text-center">No payment record found yet.</div>
          )}
        </Card>
      </div>
    </section>
  )
}
export default PaymentsPage
