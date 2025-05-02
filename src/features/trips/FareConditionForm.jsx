import Card from '@/components/Card'

const FareConditionForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      fareConditions: prevFormData.fareConditions.map((fareCondition) => {
        if (fareCondition.conditionLabel === formData.conditionLabel)
          return {
            ...fareCondition,
            [e.target.name]: e.target.value,
          }
        return fareCondition
      }),
    }))
    console.log(formData)
  }

  return (
    <Card styles={'m-6 md:mx-auto p-6 bg-white md:max-w-120'}>
      <div className="text-xl my-2 text-center">{formData.conditionLabel}</div>
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
            min={0}
            value={formData.adultPrice}
            onChange={(e) =>
              handleChange({
                ...e,
                target: {
                  name: e.target.name,
                  value: Number(e.target.value),
                },
              })
            }
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
            min={0}
            value={formData.childPrice}
            onChange={(e) =>
              handleChange({
                ...e,
                target: {
                  name: e.target.name,
                  value: Number(e.target.value),
                },
              })
            }
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
            min={0}
            value={formData.infantPrice}
            onChange={(e) =>
              handleChange({
                ...e,
                target: {
                  name: e.target.name,
                  value: Number(e.target.value),
                },
              })
            }
            required
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-2">
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
            min={0}
            value={formData.maxWeeksBefore}
            onChange={(e) =>
              handleChange({
                ...e,
                target: {
                  name: e.target.name,
                  value: Number(e.target.value),
                },
              })
            }
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
            min={0}
            value={formData.minWeeksBefore}
            onChange={(e) =>
              handleChange({
                ...e,
                target: {
                  name: e.target.name,
                  value: Number(e.target.value),
                },
              })
            }
            required
          />
        </div>
      </div> */}

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
          min={0}
          value={formData.cancelLessThan48h}
          onChange={(e) =>
            handleChange({
              ...e,
              target: {
                name: e.target.name,
                value: Number(e.target.value),
              },
            })
          }
          required
        />
      </div>
    </Card>
  )
}
export default FareConditionForm
