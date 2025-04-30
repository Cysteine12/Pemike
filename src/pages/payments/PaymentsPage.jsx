import { useEffect } from 'react'
import { usePaymentStore } from '@/stores/usePaymentStore'
import AppSpinner from '@/components/AppSpinner'
import PaymentDetail from '@/features/payments/PaymentDetail'
import AppButton from '@/components/AppButton'
import { Link } from 'react-router'
import Card from '@/components/Card'

const PaymentsPage = () => {
  const { fetchPayments, payments, loading } = usePaymentStore()

  useEffect(() => {
    const query = { page: 1, limit: 10 }
    fetchPayments(query)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="text-center font-bold text-blue-500 text-2xl">
        Payments History
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <div className="lg:grid grid-cols-2">
          {payments.map((payment) => (
            <PaymentDetail key={payment.id} payment={payment}>
              <div className="mt-5 flex justify-end">
                <Link to={`/payments/${payment.id}`}>
                  <AppButton text={'See more'} />
                </Link>
              </div>
            </PaymentDetail>
          ))}
          {payments.length < 1 && (
            <Card styles={'m-5 bg-white'}>No payment record found!</Card>
          )}
        </div>
      )}
    </>
  )
}
export default PaymentsPage
