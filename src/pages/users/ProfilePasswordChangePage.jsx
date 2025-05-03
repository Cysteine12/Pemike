import AppButton from '@/components/AppButton'
import Card from '@/components/Card'
import { useAuthStore } from '@/stores/useAuthStore'
import { useState } from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const ProfilePasswordChangePage = () => {
  const navigate = useNavigate()
  const { changePassword, loading } = useAuthStore()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!currentPassword || !newPassword || !confirmPassword) return
    if (newPassword !== confirmPassword)
      return toast.error('Passwords do not match')

    const res = await changePassword({ currentPassword, newPassword })

    if (res && res.success) return navigate('/profile')
  }
  return (
    <main className="flex items-center justify-center">
      <Card styles={'m-12 md:mx-auto p-10 bg-white md:max-w-120'}>
        <h4 className="text-blue-500 text-center font-bold text-2xl">
          Update Profile Password
        </h4>
        <form onSubmit={handleFormSubmit}>
          <div className="my-2">
            <label
              htmlFor="currentPassword"
              className="text-blue-500 font-bold"
            >
              Current Password
            </label>
            <input
              type="currentPassword"
              name="currentPassword"
              minLength="7"
              id="currentPassword"
              placeholder="Enter your current password..."
              className="my-1 p-3 w-full border-2 border-blue-200 rounded-xl"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>

          <div className="my-2">
            <label htmlFor="newPassword" className="text-blue-500 font-bold">
              New Password
            </label>
            <input
              type="newPassword"
              name="newPassword"
              minLength="7"
              id="newPassword"
              placeholder="Enter your new password..."
              className="my-1 p-3 w-full border-2 border-blue-200 rounded-xl"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="confirmPassword"
              className="text-blue-500 font-bold"
            >
              Confirm Password
            </label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              minLength="7"
              id="confirmPassword"
              placeholder="Confirm your new password..."
              className="my-1 p-3 w-full border-2 border-blue-200 rounded-xl"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center">
            <AppButton
              loading={loading}
              type="submit"
              style="mt-4 py-3 rounded-xl w-full"
            >
              Update Password <FaRegArrowAltCircleRight className="ml-1" />
            </AppButton>
          </div>
        </form>
      </Card>
    </main>
  )
}
export default ProfilePasswordChangePage
