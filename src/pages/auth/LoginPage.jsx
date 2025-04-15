import AppButton from '@/components/AppButton'
import Card from '@/components/Card'
import OTPModal from '@/features/auth/OTPModal'
import useSessionStorage from '@/hooks/useSessionStorage'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRef, useState } from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'

const LoginPage = () => {
  const navigate = useNavigate()
  const passwordRef = useRef()
  const { login, verifyEmail } = useAuthStore()
  const [redirect] = useSessionStorage('redirect')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) return

    const res = await login({ email, password })
    if (!res) return
    if (res.type === 'verify-email') {
      setIsModalOpen(true)
      return
    }

    if (redirect) {
      sessionStorage.removeItem('redirect')
      return navigate(redirect)
    }
    navigate('/dashboard')
  }

  const handleOTPSubmit = async (otp) => {
    const res = await verifyEmail({ email, otp })
    if (!res || !res.success) return

    if (redirect) {
      sessionStorage.removeItem('redirect')
      return navigate(redirect)
    }
    navigate('/dashboard')
  }

  const togglePassword = () => {
    if (passwordRef.current.type === 'text')
      passwordRef.current.type = 'password'
    else passwordRef.current.type = 'text'
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
              type="email"
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
            <Link className="my-2" to="/forgot-password">
              Forgot Password?
            </Link>
            <br />
            <Link className="my-2" to="/register">
              Create an Account!
            </Link>
          </div>
          <div className="mt-5 text-center text-blue-600">
            <Link className="my-2" to="/">
              Go to our Home Page
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
