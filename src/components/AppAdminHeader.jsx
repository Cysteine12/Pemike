import AppLogo from '@/assets/imgs/pemike_Logo.png'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRef } from 'react'
import { FaDirections, FaList, FaUser } from 'react-icons/fa'
import { Link } from 'react-router'

const AppAdminHeader = () => {
  const showMenuRef = useRef()
  const menuBar = useRef()

  const { user, loading, logout } = useAuthStore()

  const toggleMenu = () => showMenuRef.current.classList.toggle('hidden')

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pemike</span>
            <img className="h-8 w-auto" src={AppLogo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-blue-600">
          <Link to="/admin/dashboard" className="font-semibold">
            Dashboard
          </Link>
          <Link to="/admin/users" className="font-semibold">
            Users
          </Link>
          <Link to="/admin/trips" className="font-semibold">
            Trips
          </Link>
          <Link to="/admin/vehicles" className="font-semibold">
            Vehicles
          </Link>
          <Link to="/admin/bookings" className="font-semibold">
            Bookings
          </Link>
          <Link to="/admin/payments" className="font-semibold">
            Payments
          </Link>
        </div>

        {!loading && (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center text-blue-600">
            <div className="flex mr-2 p-1 px-3 text-sm border border-dashed rounded border-red-500 text-red-500">
              {user.role}
            </div>

            <button
              onClick={() => menuBar.current.classList.toggle('hidden')}
              className="flex font-semibold cursor-pointer "
            >
              <FaUser className="mt-1 mr-2 bg-blue-200 text-blue-600 rounded-full" />
              <span>{user.firstName}</span>
            </button>
            <ul
              ref={menuBar}
              className="absolute hidden mt-48 p-3 text-gray-500 bg-white rounded shadow-2xl"
            >
              <li>
                <Link
                  to={'/admin/dashboard'}
                  className="flex my-2 hover:text-blue-500"
                >
                  <FaUser className="text-sm mt-1 mr-2" />
                  <span>My Profile</span>
                </Link>
              </li>

              <li>
                <hr />
                <button
                  onClick={() => logout()}
                  className="flex my-2 hover:text-blue-500 cursor-pointer "
                >
                  <FaDirections className="mt-1 mr-2" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div
        ref={showMenuRef}
        className="lg:hidden hidden"
        role="dialog"
        aria-modal="true"
        s
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Pemike</span>
              <img className="h-8 w-auto" src={AppLogo} alt="" />
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={toggleMenu}
                  to="/admin/dashboard"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </Link>
                <Link
                  onClick={toggleMenu}
                  to="/admin/users"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Users
                </Link>
                <Link
                  onClick={toggleMenu}
                  to="/admin/trips"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Trips
                </Link>
                <Link
                  onClick={toggleMenu}
                  to="/admin/vehicles"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Vehicles
                </Link>
                <Link
                  onClick={toggleMenu}
                  to="/admin/bookings"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Bookings
                </Link>
                <Link
                  onClick={toggleMenu}
                  to="/admin/payments"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Payments
                </Link>
              </div>
              <button
                onClick={() => logout()}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default AppAdminHeader
