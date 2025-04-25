import AppSpinner from '@/components/AppSpinner'
import VehicleForm from '@/features/vehicles/VehicleForm'
import { useVehicleStore } from '@/stores/useVehicleStore'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const VehicleEditPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { fetchVehicle, updateVehicle, vehicles, loading } = useVehicleStore()

  const [formData, setFormData] = useState(null)

  useEffect(() => {
    fetchVehicle(id)
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await updateVehicle(id, formData)
    if (res && res.success) navigate(`/admin/vehicles/${id}`)
  }

  return (
    <main>
      {loading ? (
        <AppSpinner />
      ) : (
        <div className="mx-auto py-5">
          <h4 className="text-blue-500 text-center font-bold text-2xl">
            Update Vehicle Detail
          </h4>

          <VehicleForm
            formData={formData || vehicles[0]}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </main>
  )
}
export default VehicleEditPage
