import OTPModal from '@/features/auth/OTPModal'
import UserCreateForm from '@/features/user/UserCreateForm'
import { useAuthStore } from '@/stores/useAuthStore'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const RegisterPage = () => {
  const navigate = useNavigate()
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = async () => {
    if (formData.password !== formData.confirmPassword)
      return toast.error('Password does not match')

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
    navigate('/dashboard')
  }

  return (
    <main className="flex items-center justify-center">
      <UserCreateForm
        formData={formData}
        setFormData={setFormData}
        formTitle={'Create an Account!'}
        formFooter={<FormFooter />}
        handleSubmit={handleFormSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-blue-500 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Password..."
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-blue-500 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Confirm Password..."
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </UserCreateForm>

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
