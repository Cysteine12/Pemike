import Card from '@/components/Card'
import { useState } from 'react'

const FareConditionForm = ({ label, formData, setFormData }) => {
  const [fareConditionFormData, setFareConditionFormData] = useState({
    conditionLabel: '',
    adultPrice: '',
    childPrice: '',
    infantPrice: '',
    maxWeeksBefore: '',
    minWeeksBefore: '',
    cancelLessThan48h: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card styles={'m-12 md:mx-auto p-6 bg-white md:max-w-120'}>
      <span className="text-xl">{label}</span>
      <form>
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
      </form>
    </Card>
  )
}
export default FareConditionForm
