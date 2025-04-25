import FareConditionForm from '@/features/trips/FareConditionForm'
import TripForm from '@/features/trips/TripForm'
import { useAdminStore } from '@/stores/useAdminStore'
import { useTripStore } from '@/stores/useTripStore'
import { useVehicleStore } from '@/stores/useVehicleStore'
import { useEffect, useState } from 'react'
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
    fareConditions: [],
  })

  useEffect(() => {
    const query = { page: null, limit: null }
    fetchUsersByRole({ role: 'driver' }, query)
    fetchVehicles(query)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await createTrip(formData)
    if (res && res.success) navigate(`/admin/trips/${res.data.id}`)
  }

  return (
    <main>
      <div className="mx-auto py-5">
        <h4 className="text-blue-500 text-center font-bold text-2xl">
          Create New Trip
        </h4>
        <div className="grid grid-cols-2">
          <TripForm
            formData={formData}
            setFormData={setFormData}
            drivers={users}
            vehicles={vehicles}
            handleSubmit={handleSubmit}
          />

          <div>
            <FareConditionForm
              label={'WEEK_0_TO_2'}
              formData={formData}
              setFormData={setFormData}
            />
            <FareConditionForm
              label={'WEEK_2_TO_4'}
              formData={formData}
              setFormData={setFormData}
            />
            <FareConditionForm
              label={'WEEK_MORE_THAN_4'}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export default TripCreatePage
