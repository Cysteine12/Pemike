import AppButton from '@/components/AppButton'
import { useAuthStore } from '@/stores/useAuthStore'
import { FaPlus } from 'react-icons/fa'

const UserCreateForm = ({ formData, setFormData, handleSubmit }) => {
  const { loading } = useAuthStore()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()

    handleSubmit()
  }

  return (
    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
      <form onSubmit={submitForm}>
        <h2 className="text-3xl text-center font-semibold mb-6">
          Passenger Details
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Firstname
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="Firstname..."
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Surname
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border rounded w-full py-2 px-3 mb-2"
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
            className="block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded w-full py-2 px-3"
            placeholder="Email address..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Contact Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="border rounded w-full py-2 px-3"
            placeholder="Contact phone..."
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="border rounded w-full py-2 px-3"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>

        <div>
          <AppButton type="submit" style={'m-auto'} disabled={loading}>
            <FaPlus className="mr-1" /> Add Profile
          </AppButton>
        </div>
      </form>
    </div>
  )
}
export default UserCreateForm
