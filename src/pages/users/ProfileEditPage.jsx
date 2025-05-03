import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useUserStore } from '@/stores/useUserStore'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import Card from '@/components/Card'
import AppButton from '@/components/AppButton'

const ProfileUpdatePage = () => {
  const navigate = useNavigate()
  const { updateProfile, user, loading } = useUserStore()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
  })

  useEffect(() => {
    setFormData(user)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await updateProfile(formData)

    if (res && res.success) navigate(`/profile`)
  }

  return (
    <>
      <main>
        <div className="mx-auto py-1">
          <Card styles={'m-12 mx-6 md:mx-auto p-6 bg-white md:max-w-120'}>
            <form onSubmit={handleSubmit}>
              <h4 className="my-5 text-blue-500 text-center font-bold text-3xl">
                Update Profile Details
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-blue-500 font-bold mb-2">
                    Firstname
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
                    placeholder="Firstname..."
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-blue-500 font-bold mb-2">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
                    placeholder="Surname..."
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-blue-500 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
                  placeholder="Contact phone..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-blue-500 font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>

              <div className="flex justify-center">
                <AppButton
                  loading={loading}
                  type="submit"
                  style="mt-4 py-3 rounded-xl w-full"
                >
                  Update Profile <FaRegArrowAltCircleRight className="ml-1" />
                </AppButton>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </>
  )
}

export default ProfileUpdatePage
