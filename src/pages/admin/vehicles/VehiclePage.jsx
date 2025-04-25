import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import { useVehicleStore } from '@/stores/useVehicleStore'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import { useEffect } from 'react'
import { FaBus, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { useParams } from 'react-router'

const VehiclePage = () => {
  const { id } = useParams()
  const { fetchVehicle, vehicles, loading } = useVehicleStore()

  useEffect(() => {
    fetchVehicle(id)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="text-center font-bold text-blue-500 text-2xl">
        Vehicle Details
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <Card
          styles={
            'md:grid md:grid-cols-2 md:gap-10 mx-8 py-6 px-4 bg-white rounded-2xl md:mx-auto md:min-w-100  md:max-w-300'
          }
        >
          <img
            src={vehicles[0].thumbnail}
            alt="Vehicle Image"
            className="rounded h-64 w-full"
          />
          <ul className="mt-8 md:my-0 md:mx-16">
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaBus className={'mt-1 mr-3'} /> Brand:
              </span>

              <span>{vehicles[0].brand}</span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaBus className={'mt-1 mr-3'} /> Model:
              </span>

              <span>{vehicles[0].model}</span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaBus className={'mt-1 mr-3'} /> Category:
              </span>

              <span>{vehicles[0].category}</span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaClock className={'mt-1 mr-3'} /> Last Updated:
              </span>
              <span>
                {formatDateIntl(vehicles[0].updatedAt)} |{' '}
                {formatTime(vehicles[0].updatedAt)}
              </span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaMapMarkerAlt className={'mt-1 mr-3'} /> No of Seats:
              </span>
              <span className="flex">{vehicles[0].totalPassengerSeat}</span>
            </li>
            <li className="my-4 flex justify-between items-center">
              <span className="flex text-blue-500">
                <FaMapMarkerAlt className={'mt-1 mr-3'} /> Availability:
              </span>
              <span className="flex">
                {vehicles[0].available ? 'Available' : 'Unavailable'}
              </span>
            </li>
          </ul>
        </Card>
      )}
    </>
  )
}
export default VehiclePage
