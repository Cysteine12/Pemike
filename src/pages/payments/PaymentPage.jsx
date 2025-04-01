import { useEffect } from 'react'
import { usePaymentStore } from '@/stores/usePaymentStore'
import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import { useParams } from 'react-router'

const PaymentPage = () => {
  const { id } = useParams()
  const { fetchPayment, payments, loading } = usePaymentStore()

  useEffect(() => {
    fetchPayment(id)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <br />
      <div className="text-center font-bold text-blue-500 text-2xl">
        Available Payments
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <div className="lg:grid grid-cols-2">
          <Card>{JSON.stringify(payments)}</Card>
        </div>
      )}
    </>
  )
}
export default PaymentPage
