import AppButton from '@/components/AppButton'
import Card from '@/components/Card'
import { useAuthStore } from '@/stores/useAuthStore'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { toast } from 'react-toastify'

const UserCreateForm = ({
  formTitle,
  formFooter,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const { loading } = useAuthStore()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      return toast.error('Password does not match')
    }
    handleSubmit()
  }

  return (
    <Card styles={'m-12 md:mx-auto p-6 bg-white md:max-w-120'}>
      <form onSubmit={submitForm}>
        <h4 className="my-5 text-blue-500 text-center font-bold text-3xl">
          {formTitle}
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
            htmlFor="contact_email"
            className="block text-blue-500 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            placeholder="Email address..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-blue-500 font-bold mb-2">
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
          <label htmlFor="type" className="block text-blue-500 font-bold mb-2">
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

        <div className="flex justify-center">
          <AppButton
            loading={loading}
            type="submit"
            style="mt-4 py-3 rounded-xl w-full"
          >
            Register <FaRegArrowAltCircleRight className="ml-1" />
          </AppButton>
        </div>

        {formFooter}
      </form>
    </Card>
  )
}
export default UserCreateForm
