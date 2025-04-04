import AppButton from '@/components/AppButton'
import Card from '@/components/Card'
import OTPModal from '@/features/auth/OTPModal'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRef, useState } from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'

const LoginPage = () => {
  const navigate = useNavigate()
  const passwordRef = useRef()
  const { login, passwordlessLogin, verifyEmail } = useAuthStore()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [requestType, setRequestType] = useState()

  const togglePassword = () => {
    if (passwordRef.current.type === 'text')
      passwordRef.current.type = 'password'
    else passwordRef.current.type = 'text'
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) return

    const res = await login({ email, password })
    if (!res) return
    if (['passwordless-login', 'verify-email'].includes(res.type)) {
      setIsModalOpen(true)
      setRequestType(res.type)
      return
    }
    navigate('/dashboard')
  }

  const handleOTPSubmit = async (otp) => {
    let res
    if (requestType === 'passwordless-login') {
      res = await passwordlessLogin({ email, otp })
    } else if (requestType === 'verify-email') {
      res = await verifyEmail({ email, otp })
    }
    if (!res || !res.success) return
    navigate('/dashboard')
  }

  return (
    <main className="flex items-center justify-center">
      <Card styles={'m-12 md:mx-auto p-10 bg-white md:max-w-120'}>
        <h4 className="text-blue-500 text-center font-bold text-2xl">
          Welcome Back!
        </h4>
        <form onSubmit={handleFormSubmit}>
          <div className="my-2">
            <label htmlFor="email" className="text-blue-500 font-bold">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address..."
              className="my-1 p-3 w-full border-2 border-blue-200 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="my-2">
            <label htmlFor="password" className="text-blue-500 font-bold">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              minLength="7"
              id="password"
              placeholder="Enter your password..."
              className="my-1 p-3 w-full border-2 border-blue-200 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              onClick={togglePassword}
              type="checkbox"
              name="togglePassword"
              id="togglePassword"
            />
            <label
              htmlFor="togglePassword"
              className="ml-2 text-sm text-blue-500"
            >
              Show password
            </label>
          </div>

          <div className="flex justify-center">
            <AppButton type="submit" style="mt-4 py-3 rounded-xl w-full">
              Login <FaRegArrowAltCircleRight className="ml-1" />
            </AppButton>
          </div>

          <div className="mt-5 text-center text-sm text-blue-500">
            <Link class="my-1" to="/forgot-password">
              Forgot Password?
            </Link>
            <br />
            <Link class="my-1" to="/register">
              Create an Account!
            </Link>
          </div>
        </form>
      </Card>

      <OTPModal
        email={email}
        handleSubmit={handleOTPSubmit}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </main>
  )
}
export default LoginPage
