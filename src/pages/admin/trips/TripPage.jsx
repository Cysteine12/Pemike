import AppSpinner from '@/components/AppSpinner'
import Card from '@/components/Card'
import TripDetail from '@/features/trips/TripDetail'
import SeatsLayout from '@/features/vehicles/SeatsLayout'
import { useAdminStore } from '@/stores/useAdminStore'
import { useTripStore } from '@/stores/useTripStore'
import { formatDateIntl, formatTime } from '@/utils/dateFormatter'
import { useEffect } from 'react'
import {
  FaAngleLeft,
  FaBus,
  FaClock,
  FaDollarSign,
  FaMoneyBillWave,
} from 'react-icons/fa'
import { useParams } from 'react-router'

const TripPage = () => {
  const { id } = useParams()
  const { fetchTrip, trips, loading } = useTripStore()
  const { fetchSeatsByTrip } = useAdminStore()

  useEffect(() => {
    fetchTrip(id)
    fetchSeatsByTrip(id)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="text-center font-bold text-blue-500 text-2xl">
        Trip Details
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div className="md:px-4 mx-auto">
            <TripDetail trip={trips[0]} />

            <Card styles={'md:mx-auto mx-8 mb-9 bg-white'}>
              <SeatsLayout />
            </Card>
          </div>

          <Card
            styles={
              'mx-8 py-6 px-4 bg-white rounded-2xl md:mx-auto lg:min-w-[500px]'
            }
          >
            <h3 className="text-center font-bold text-2xl text-blue-500">
              Fare Conditions
            </h3>

            {trips[0].FareCondition?.map((fareCondition) => (
              <div key={fareCondition.id}>
                <h5 className="text-center text-xl">
                  {fareCondition.conditionLabel}
                </h5>
                <ul className="mt-8 md:my-0 md:mx-16">
                  <li className="my-4 flex justify-between items-center">
                    <span className="flex text-blue-500">
                      <FaBus className={'mt-1 mr-3'} /> Minimum weeks before:
                    </span>

                    <span>{fareCondition.minWeeksBefore}</span>
                  </li>
                  <li className="my-4 flex justify-between items-center">
                    <span className="flex text-blue-500">
                      <FaBus className={'mt-1 mr-3'} /> Maximum weeks before:
                    </span>

                    <span>{fareCondition.maxWeeksBefore ?? 'Not Set'}</span>
                  </li>
                  <li className="my-4 flex justify-between items-center">
                    <span className="flex text-blue-500">
                      <FaDollarSign className={'mt-1 mr-3'} /> Adult Price:
                    </span>

                    <span>₦{fareCondition.adultPrice}</span>
                  </li>
                  <li className="my-4 flex justify-between items-center">
                    <span className="flex text-blue-500">
                      <FaDollarSign className={'mt-1 mr-3'} /> Child Price:
                    </span>

                    <span>₦{fareCondition.childPrice}</span>
                  </li>
                  <li className="my-4 flex justify-between items-center">
                    <span className="flex text-blue-500">
                      <FaDollarSign className={'mt-1 mr-3'} /> Infant Price:
                    </span>

                    <span>₦{fareCondition.infantPrice}</span>
                  </li>
                  <li className="my-4 flex justify-between items-center">
                    <span className="flex text-blue-500 items-center">
                      <FaMoneyBillWave className={'mr-3'} /> Cancel Charge(
                      <FaAngleLeft /> 48hours):
                    </span>

                    <span>{fareCondition.cancelLessThan48h}%</span>
                  </li>
                  <li className="my-4 flex justify-between items-center">
                    <span className="flex text-blue-500">
                      <FaClock className={'mt-1 mr-3'} /> Last Updated:
                    </span>
                    <span>
                      {formatDateIntl(trips[0].updatedAt)} |{' '}
                      {formatTime(trips[0].updatedAt)}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </Card>
        </div>
      )}
    </>
  )
}
export default TripPage
