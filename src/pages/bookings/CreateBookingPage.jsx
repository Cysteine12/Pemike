import { useEffect, useState } from 'react'
import { useTripStore } from '@/stores/useTripStore'
import { useNavigate, useSearchParams } from 'react-router'
import AppSpinner from '@/components/AppSpinner'
import TripDetail from '@/features/trips/TripDetail'

const CreateBookingPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { fetchTrip, trips, loading } = useTripStore()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
  })

  const tripId = searchParams.getAll('tripId')
  const sessionId = searchParams.getAll('sessionId')

  useEffect(() => {
    console.log(tripId, sessionId)
    if (!sessionId || !tripId) navigate(`trips/${tripId}`)
    fetchTrip(tripId)
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {}

  return (
    <>
      <br />
      <div className="text-center font-bold text-blue-500 text-2xl">
        Booking Details
      </div>
      <br />

      {loading ? (
        <AppSpinner />
      ) : (
        <section className="lg:grid grid-cols-2">
          <TripDetail trip={trips[0]} />

          <div className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
              <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl text-center font-semibold mb-6">
                    Passenger Details
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Firstname
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Firstname..."
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Surname
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Surname..."
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="contact_email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border rounded w-full py-2 px-3"
                      placeholder="Email address..."
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border rounded w-full py-2 px-3"
                      placeholder="Contact phone..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="type"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="border rounded w-full py-2 px-3"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Add Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default CreateBookingPage
