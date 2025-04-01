import AppSpinner from '@/components/AppSpinner'
import { usePaymentStore } from '@/stores/usePaymentStore'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

const PaymentVerifyPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { verifyPayment } = usePaymentStore()

  const reference = searchParams.get('reference')

  useEffect(() => {
    if (!reference) navigate('/')

    verifyPayment(reference, navigate)

    return () => {
      localStorage.removeItem('selectedSeats')
      localStorage.removeItem('userSearchParam')
    }
  }, [])

  return <AppSpinner />
}
export default PaymentVerifyPage
