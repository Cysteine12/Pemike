import AppButton from '@/components/AppButton'
import Card from '@/components/Card'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const TripForm = ({
  formData,
  setFormData,
  drivers,
  vehicles,
  handleSubmit,
}) => {
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
            htmlFor="driverId"
            className="block text-blue-500 font-bold mb-2"
          >
            Select Driver
          </label>
          <select
            id="driverId"
            name="driverId"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            value={formData.driverId}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Select trip driver
            </option>
            {drivers?.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.firstName} {driver.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="vehicleId"
            className="block text-blue-500 font-bold mb-2"
          >
            Select Vehicle
          </label>
          <select
            id="vehicleId"
            name="vehicleId"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            value={formData.vehicleId}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Select trip vehicle
            </option>
            {vehicles?.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.brand} {vehicle.model} {vehicle.category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="source"
            className="block text-blue-500 font-bold mb-2"
          >
            Source
          </label>
          <input
            type="text"
            id="source"
            name="source"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            placeholder="Source..."
            value={formData.source}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="destination"
            className="block text-blue-500 font-bold mb-2"
          >
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            placeholder="Destination..."
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="departureSchedule"
            className="block text-blue-500 font-bold mb-2"
          >
            Departure Schedule
          </label>
          <input
            type="datetime-local"
            id="departureSchedule"
            name="departureSchedule"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            placeholder="Departure Schedule..."
            value={formData.departureSchedule}
            min={new Date().toISOString().split('.')[0]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="firstChangePercent"
              className="block text-blue-500 font-bold mb-2"
            >
              First Change Percent
            </label>
            <input
              type="number"
              id="firstChangePercent"
              name="firstChangePercent"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="First Change Percent..."
              value={formData.firstChangePercent}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="secondChangePercent"
              className="block text-blue-500 font-bold mb-2"
            >
              Second Change Percent
            </label>
            <input
              type="number"
              id="secondChangePercent"
              name="secondChangePercent"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Second Change Percent..."
              value={formData.secondChangePercent}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="refundDays"
            className="block text-blue-500 font-bold mb-2"
          >
            Refund Days
          </label>
          <input
            type="number"
            id="refundDays"
            name="refundDays"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            placeholder="Refund Days..."
            value={formData.refundDays}
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

        <div className="flex justify-center">
          <AppButton type="submit" style="mt-4 py-3 rounded-xl w-full">
            Submit <FaRegArrowAltCircleRight className="ml-1" />
          </AppButton>
        </div>
      </form>
    </Card>
  )
}
export default TripForm
