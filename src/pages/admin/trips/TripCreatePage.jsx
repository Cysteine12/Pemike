import AppButton from '@/components/AppButton'
import FareConditionForm from '@/features/trips/FareConditionForm'
import TripForm from '@/features/trips/TripForm'
import { useAdminStore } from '@/stores/useAdminStore'
import { useTripStore } from '@/stores/useTripStore'
import { useVehicleStore } from '@/stores/useVehicleStore'
import { useEffect, useState } from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const TripCreatePage = () => {
  const navigate = useNavigate()
  const { createTrip } = useTripStore()
  const { fetchUsersByRole, users } = useAdminStore()
  const { fetchVehicles, vehicles } = useVehicleStore()

  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    departureSchedule: '',
    firstChangePercent: '',
    secondChangePercent: '',
    refundDays: '',
    vehicleId: '',
    driverId: '',
    fareConditions: [
      {
        conditionLabel: 'WEEK_0_TO_2',
        adultPrice: '',
        childPrice: '',
        infantPrice: '',
        maxWeeksBefore: '2',
        minWeeksBefore: '0',
        cancelLessThan48h: '',
      },
      {
        conditionLabel: 'WEEK_2_TO_4',
        adultPrice: '',
        childPrice: '',
        infantPrice: '',
        maxWeeksBefore: '4',
        minWeeksBefore: '2',
        cancelLessThan48h: '',
      },
      {
        conditionLabel: 'WEEK_MORE_THAN_4',
        adultPrice: '',
        childPrice: '',
        infantPrice: '',
        maxWeeksBefore: null,
        minWeeksBefore: '4',
        cancelLessThan48h: '',
      },
    ],
  })

  useEffect(() => {
    const query = { page: null, limit: null }
    fetchUsersByRole({ role: 'driver' }, query)
    fetchVehicles(query)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await createTrip({
      ...formData,
      departureSchedule: `${formData.departureSchedule}:00.000Z`,
    })
    if (res && res.success) navigate(`/admin/trips/${res.data.id}`)
  }

  return (
    <main>
      <div className="mx-auto py-5">
        <h4 className="text-blue-500 text-center font-bold text-2xl">
          Create New Trip
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2">
            <TripForm
              formData={formData}
              setFormData={setFormData}
              drivers={users}
              vehicles={vehicles}
              showSubmitBtn={false}
            />

            <div>
              {formData.fareConditions.map((fareCondition) => (
                <FareConditionForm
                  key={fareCondition.conditionLabel}
                  formData={fareCondition}
                  setFormData={setFormData}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <AppButton
              type="submit"
              style="m-6 py-3 rounded-xl w-full md:max-w-100"
            >
              Submit <FaRegArrowAltCircleRight className="ml-1" />
            </AppButton>
          </div>
        </form>
      </div>
    </main>
  )
}
export default TripCreatePage
