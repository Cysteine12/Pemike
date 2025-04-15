import { useEffect } from 'react'
import { usePaymentStore } from '@/stores/usePaymentStore'
import AppSpinner from '@/components/AppSpinner'
import { useParams } from 'react-router'
import PaymentDetail from '@/features/payments/PaymentDetail'
import TripDetail from '@/features/trips/TripDetail'

const PaymentPage = () => {
  const { id } = useParams()
  const { fetchPayment, payments, loading } = usePaymentStore()
  console.log(loading)

  useEffect(() => {
    ;(async () => await fetchPayment(id))()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="text-center font-bold text-blue-500 text-2xl">
        Payment Detail
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <div className="lg:grid grid-cols-2">
          <PaymentDetail payment={payments[0]} />

          <TripDetail trip={payments[0].booking.trip} />
        </div>
      )}
    </>
  )
}
export default PaymentPage
