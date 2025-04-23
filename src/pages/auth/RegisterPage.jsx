import OTPModal from '@/features/auth/OTPModal'
import UserCreateForm from '@/features/user/UserCreateForm'
import useAuthNavigate from '@/hooks/useAuthNavigate'
import { useAuthStore } from '@/stores/useAuthStore'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const RegisterPage = () => {
  const navigate = useNavigate()
  const { register, login, verifyEmail } = useAuthStore()
  const { authNavigate } = useAuthNavigate(navigate)

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

    return authNavigate(loginRes.user)
  }

  return (
    <main className="flex items-center justify-center">
      <UserCreateForm
        formData={formData}
        setFormData={setFormData}
        formTitle={'Create an Account!'}
        formFooter={<FormFooter />}
        handleSubmit={handleFormSubmit}
      />

      <OTPModal
        email={formData.email}
        handleSubmit={handleOTPSubmit}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        hasSentOTP={true}
      />
    </main>
  )
}

const FormFooter = () => {
  return (
    <>
      <div className="mt-5 text-center text-sm text-blue-500">
        <Link className="my-1" to="/forgot-password">
          Forgot Password?
        </Link>
        <br />
        <Link className="my-1" to="/login">
          Already have an account? Login!
        </Link>
      </div>
    </>
  )
}

export default RegisterPage
