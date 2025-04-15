import AppButton from '@/components/AppButton'
import AppModal from '@/components/AppModal'
import { useAuthStore } from '@/stores/useAuthStore'
import { useEffect } from 'react'
import { FaMarker, FaRetweet } from 'react-icons/fa'

const OTPModal = ({
  isModalOpen,
  setIsModalOpen,
  handleSubmit,
  email,
  modalTitle = 'Enter the 6-digit code sent to your email',
  hasSentOTP = false,
}) => {
  const { requestOTP, loading } = useAuthStore()

  useEffect(() => {
    if (isModalOpen && !hasSentOTP) handleRequest()
  }, [isModalOpen])

  const handleKeydown = (e, box) => {
    if (e.key === 'Backspace' && !e.target.value && box > 1) {
      document.getElementById(`box-${box - 1}`).focus()
    }
  }

  const triggerNext = (e, next) => {
    if (!/^[0-9]?$/.test(e.target.value)) return (e.target.value = '')

    if (e.target.value.length < 1 || next > 6) return

    document.getElementById(`box-${next}`).focus()
  }

  const handleRequest = async () => {
    await requestOTP({ email })
  }

  const submitForm = async (formData) => {
    const otpValues = formData.getAll('box')
    const otp = otpValues.join('')

    return handleSubmit(otp)
  }

  return (
    <AppModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      loading={loading}
    >
      <form className="block relative" action={submitForm}>
        <div id="box" className="text-center text-gray-700 font-bold">
          {modalTitle}
        </div>
        <br />
        <div className="my-1 justify-self-center">
          {[1, 2, 3, 4, 5, 6].map((boxNumber) => (
            <input
              key={boxNumber}
              type="text"
              id={`box-${boxNumber}`}
              name={`box`}
              autoFocus={boxNumber === 1}
              onKeyDown={(e) => handleKeydown(e, boxNumber)}
              onInput={(e) => triggerNext(e, boxNumber + 1)}
              maxLength={1}
              className="inline-flex w-7 h-7 justify-center items-center p-2 mx-1 bg-gray-300 rounded"
              required
            />
          ))}
        </div>
        <AppButton
          type="button"
          style={'mx-auto my-2 bg-transparent'}
          onClick={() => handleRequest()}
        >
          <span className="flex flex-row items-center text-blue-600">
            Resend code <FaRetweet className="ml-1" />
          </span>
        </AppButton>
        <AppButton
          type="submit"
          style={'mx-auto bg-green-400'}
          disabled={loading}
        >
          <FaMarker className="mr-1" /> Confirm
        </AppButton>
      </form>
    </AppModal>
  )
}
export default OTPModal
