import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { useUserStore } from '@/stores/useUserStore'
import OTPModal from '@/features/auth/OTPModal'
import UserCreateForm from '@/features/user/UserCreateForm'
import { useAuthStore } from '@/stores/useAuthStore'

const UserCreatePage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { createProfile } = useUserStore()
  const { verifyOTP } = useAuthStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'MALE',
  })

  const tripId = searchParams.get('tripId')
  const sessionToken = searchParams.get('sessionToken')

  useEffect(() => {
    if (!sessionToken || !tripId) navigate(-1)
    window.scrollTo(0, 0)
  }, [])

  const handleFormSubmit = async () => {
    await createProfile(formData)

    navigate(`/bookings/create?tripId=${tripId}&sessionToken=${sessionToken}`)
  }

  const handleOTPSubmit = async (otp) => {
    const res = await verifyOTP({ email: formData.email, otp, type: 'general' })
    if (!res.success) return

    return handleFormSubmit()
  }

  return (
    <>
      <main>
        <div className="mx-auto py-5">
          <UserCreateForm
            formData={formData}
            setFormData={setFormData}
            formTitle={'Passenger Details'}
            handleSubmit={() => setIsModalOpen(true)}
          />
        </div>

        <OTPModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleSubmit={handleOTPSubmit}
          email={formData.email}
        />
      </main>
    </>
  )
}

export default UserCreatePage
