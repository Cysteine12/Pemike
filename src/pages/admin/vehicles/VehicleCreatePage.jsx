import VehicleForm from '@/features/vehicles/VehicleForm'
import { useVehicleStore } from '@/stores/useVehicleStore'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const VehicleCreatePage = () => {
  const navigate = useNavigate()
  const { createVehicle } = useVehicleStore()

  const [formData, setFormData] = useState({
    category: '',
    brand: '',
    model: '',
    thumbnail:
      'https://res.cloudinary.com/dbjghnlke/image/upload/v1739551140/mega-automotives/app/rentals/eeowf5iokm0l3igqaqyw.webp',
    totalPassengerSeat: 0,
    licenseNo: '',
    available: true,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await createVehicle(formData)
    if (res && res.success) navigate(`/admin/vehicles/${res.data.id}`)
  }

  return (
    <main>
      <div className="mx-auto py-5">
        <h4 className="text-blue-500 text-center font-bold text-2xl">
          Create New Vehicle
        </h4>
        <VehicleForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  )
}
export default VehicleCreatePage
