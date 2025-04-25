import AppButton from '@/components/AppButton'
import Card from '@/components/Card'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const VehicleForm = ({ formData, setFormData, handleSubmit }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card styles={'m-12 md:mx-auto p-6 bg-white md:max-w-120'}>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="vehicleType"
            className="block text-blue-500 font-bold mb-2"
          >
            Category
          </label>
          <select
            name="category"
            id="vehicleType"
            value={formData.category}
            onChange={handleChange}
            className="my-1 p-2 w-full border-2 border-blue-400 rounded"
            required
          >
            <option value={''} hidden disabled>
              Select vehicle category
            </option>
            <option value="BUS">BUS</option>
            <option value="CAR">CAR</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-blue-500 font-bold mb-2"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Brand..."
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="model"
              className="block text-blue-500 font-bold mb-2"
            >
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Model..."
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="licenseNo"
            className="block text-blue-500 font-bold mb-2"
          >
            License Number
          </label>
          <input
            type="text"
            id="licenseNo"
            name="licenseNo"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            placeholder="License Number..."
            value={formData.licenseNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="totalSeats"
            className="block text-blue-500 font-bold mb-2"
          >
            Total Passenger Seats
          </label>
          <input
            type="number"
            id="totalSeats"
            name="totalPassengerSeat"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            placeholder="Total seats for passengers..."
            value={formData.totalPassengerSeat}
            onChange={(e) =>
              handleChange({
                ...e,
                target: {
                  name: e.target.name,
                  value: Number(e.target.value),
                },
              })
            }
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="available"
            className="block text-blue-500 font-bold mb-2"
          >
            Availability
          </label>
          <select
            id="available"
            name="available"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            value={formData.available}
            onChange={(e) =>
              handleChange({
                ...e,
                target: {
                  name: e.target.name,
                  value: e.target.value === 'true',
                },
              })
            }
            required
          >
            <option value={true}>Available</option>
            <option value={false}>Unavailable</option>
          </select>
        </div>

        <div className="flex justify-center">
          <AppButton type="submit" style="mt-4 py-3 rounded-xl w-full">
            Submit <FaRegArrowAltCircleRight className="ml-1" />
          </AppButton>
        </div>
      </form>
    </Card>
  )
}
export default VehicleForm
