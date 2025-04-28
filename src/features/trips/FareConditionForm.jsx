import Card from '@/components/Card'
import { useEffect, useState } from 'react'

const FareConditionForm = ({ label, formData, setFormData }) => {
  const [fareConditionFormData, setFareConditionFormData] = useState({
    conditionLabel: label,
    adultPrice: '',
    childPrice: '',
    infantPrice: '',
    maxWeeksBefore: '',
    minWeeksBefore: '',
    cancelLessThan48h: '',
  })

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      fareConditions: [...prevFormData.fareConditions, fareConditionFormData],
    }))
  }, [])

  const handleChange = (e) => {
    setFareConditionFormData({
      ...fareConditionFormData,
      [e.target.name]: e.target.value,
    })
    setFormData({
      ...formData,
      fareConditions: formData.fareConditions.map((fareCondition) => {
        if (fareCondition.conditionLabel === label) return fareConditionFormData
        return fareCondition
      }),
    })
    console.log(formData)
  }

  return (
    <Card styles={'m-6 md:mx-auto p-6 bg-white md:max-w-120'}>
      <div className="text-xl my-2">{label}</div>
      <form>
        <div className="grid grid-cols-3 gap-2">
          <div className="mb-4">
            <label
              htmlFor="adultPrice"
              className="block text-blue-500 font-bold mb-2"
            >
              Adult Price
            </label>
            <input
              type="number"
              id="adultPrice"
              name="adultPrice"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Adult Price..."
              value={fareConditionFormData.adultPrice}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="childPrice"
              className="block text-blue-500 font-bold mb-2"
            >
              Child Price
            </label>
            <input
              type="number"
              id="childPrice"
              name="childPrice"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Child Price..."
              value={fareConditionFormData.childPrice}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="infantPrice"
              className="block text-blue-500 font-bold mb-2"
            >
              Infant Price
            </label>
            <input
              type="number"
              id="infantPrice"
              name="infantPrice"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Infant Price..."
              value={fareConditionFormData.infantPrice}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="mb-4">
            <label
              htmlFor="maxWeeksBefore"
              className="block text-blue-500 font-bold mb-2"
            >
              Maximum Weeks Before
            </label>
            <input
              type="number"
              id="maxWeeksBefore"
              name="maxWeeksBefore"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Maximum Weeks Before..."
              value={fareConditionFormData.maxWeeksBefore}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="minWeeksBefore"
              className="block text-blue-500 font-bold mb-2"
            >
              Minimum Weeks Before
            </label>
            <input
              type="number"
              id="minWeeksBefore"
              name="minWeeksBefore"
              className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
              placeholder="Minimum Weeks Before..."
              value={fareConditionFormData.minWeeksBefore}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancelLessThan48h"
            className="block text-blue-500 font-bold mb-2"
          >
            Charges for cancel less than 48 hours
          </label>
          <input
            type="number"
            id="cancelLessThan48h"
            name="cancelLessThan48h"
            className="w-full border-2 border-blue-400 rounded py-2 px-3 mb-2"
            placeholder="Charges for cancel < 48h..."
            value={fareConditionFormData.cancelLessThan48h}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </Card>
  )
}
export default FareConditionForm
