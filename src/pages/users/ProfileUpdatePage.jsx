import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import OTPModal from '@/features/auth/OTPModal'
import UserCreateForm from '@/features/user/UserCreateForm'
import { useAuthStore } from '@/stores/useAuthStore'

const ProfileUpdatePage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { register, login, verifyEmail } = useAuthStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'MALE',
    password: '',
    confirmPassword: '',
  })

  const tripId = searchParams.get('tripId')
  const sessionID = searchParams.get('sessionID')

  useEffect(() => {
    if (!sessionID || !tripId) navigate(-1)
    window.scrollTo(0, 0)
  }, [])

  const handleFormSubmit = async () => {
    const res = await register(formData)
    if (!res || !res.success) return

    setIsModalOpen(true)
  }

  const handleOTPSubmit = async (otp) => {
    const verifyRes = await verifyEmail({ email: formData.email, otp })
    if (!verifyRes || !verifyRes.success) return

    const loginRes = await login({
      email: formData.email,
      password: formData.password,
    })
    if (!loginRes || !loginRes.success) return
    navigate(`/bookings/create?tripId=${tripId}&sessionID=${sessionID}`)
  }

  return (
    <>
      <main>
        <div className="mx-auto py-5">
          <UserCreateForm
            formData={formData}
            setFormData={setFormData}
            formTitle={'Passenger Details'}
            handleSubmit={handleFormSubmit}
          />
        </div>

        <OTPModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          hasSentOTP={true}
          handleSubmit={handleOTPSubmit}
          email={formData.email}
        />
      </main>
    </>
  )
}

export default ProfileUpdatePage
