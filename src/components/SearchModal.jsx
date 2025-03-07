import { FaSearch } from 'react-icons/fa'
import AppButton from './AppButton'
import useSessionStorage from '../hooks/useSessionStorage'
import { useNavigate } from 'react-router'

const SearchModal = () => {
  const navigate = useNavigate()
  const [, setData] = useSessionStorage('searchParams')

  const submitAction = async (formData) => {
    const tripType = formData.get('tripType')
    const departure = formData.get('departure')
    const destination = formData.get('destination')
    const tripDate = formData.get('tripDate')

    const searchParams = {
      tripType,
      departure,
      destination,
      tripDate,
    }

    setData(searchParams)
    navigate('/trips')
  }

  return (
    <>
      <section className="p-4">
        <div className="p-4 border-4 border-gray-200 rounded-lg shadow-xl">
          <form action={submitAction}>
            <div className="my-1">
              <label htmlFor="tripType" className="text-blue-500 font-bold">
                One way or Round Trip*
              </label>
              <select
                name="tripType"
                id="tripType"
                className="my-1 p-2 w-full border-2 border-blue-200 rounded"
                required
              >
                <option value="One Way Trip">One way Trip</option>
                <option value="Round Trip">Round Trip</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="my-1">
                <label htmlFor="departure" className="text-blue-500 font-bold">
                  Departure*
                </label>
                <select
                  name="departure"
                  id="departure"
                  className="my-1 p-2 w-full border-2 border-blue-200 rounded"
                  required
                >
                  <option value="Lagos - Agege park">Lagos - Agege park</option>
                  <option value="Osun - Ilobu Bus -stop">
                    Osun - Ilobu Bus Stop
                  </option>
                  <option value="Lagos - Ikorodu Bus Stop">
                    Lagos - Ikorodu Bus Stop
                  </option>
                </select>
              </div>

              <div className="my-1">
                <label
                  htmlFor="destination"
                  className="text-blue-500 font-bold"
                >
                  Destination*
                </label>
                <select
                  name="destination"
                  id="destination"
                  className="my-1 p-2 w-full border-2 border-blue-200 rounded"
                  required
                >
                  <option value="Lagos - Agege park">Lagos - Agege park</option>
                  <option value="Osun - Ilobu Bus -stop">
                    Osun - Ilobu Bus Stop
                  </option>
                  <option value="Lagos - Ikorodu Bus Stop">
                    Lagos - Ikorodu Bus Stop
                  </option>
                </select>
              </div>
            </div>

            <div className="my-1">
              <label htmlFor="tripDate" className="text-blue-500 font-bold">
                Trip Date
              </label>
              <input
                type="date"
                name="tripDate"
                id="tripDate"
                className="my-1 p-1 w-full border-2 border-blue-200 rounded"
                required
              />
            </div>

            <div className="flex justify-center">
              <AppButton type="submit" style="m-2">
                <FaSearch className="mr-1" /> Search
              </AppButton>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default SearchModal
