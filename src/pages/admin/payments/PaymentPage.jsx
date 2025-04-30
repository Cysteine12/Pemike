import AppSpinner from '@/components/AppSpinner'
import PaymentDetail from '@/features/payments/PaymentDetail'
import TripDetail from '@/features/trips/TripDetail'
import UserDetail from '@/features/user/UserDetail'
import { useAdminStore } from '@/stores/useAdminStore'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const PaymentPage = () => {
  const { id } = useParams()
  const { fetchPayment, payments, loading } = useAdminStore()

  useEffect(() => {
    fetchPayment(id)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="text-center font-bold text-blue-500 text-2xl">
        Payment Details
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <div className="lg:grid lg:grid-cols-2">
          <UserDetail user={payments[0].booking?.user} />

          <TripDetail trip={payments[0].booking?.trip} />

          <PaymentDetail payment={payments[0]} />
        </div>
      )}
    </>
  )
}
export default PaymentPage
