import { useAuthStore } from '@/stores/useAuthStore'
import { useRef } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { Link } from 'react-router'

const AppHeader = () => {
  const showMenuRef = useRef()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated())
  const { logout } = useAuthStore()

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pemike</span>
            <img
              className="h-8 w-auto"
              src="../src/assets/imgs/pemike_Logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => showMenuRef.current.classList.toggle('hidden')}
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
          <Link href="/" className="font-semibold">
            Home
          </Link>

          <Link to="/trips" className="font-semibold">
            Trips
          </Link>
          <Link to="/about" className="font-semibold">
            About Us
          </Link>
          <Link to="/contact-us" className="font-semibold">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end text-blue-600">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="flex text-sm/6 font-semibold">
                Dashboard
              </Link>
              <span className="text-2xl text-gray-400 mx-2 -mt-1.5">
                {' | '}
              </span>
              <button
                onClick={() => logout()}
                className="flex text-sm/6 font-semibold cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center text-sm/6 font-semibold"
            >
              Login <FaArrowCircleRight className="ml-1.5" />
            </Link>
          )}
        </div>
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
              <img
                className="h-8 w-auto"
                src="../src/assets/imgs/pemike_Logo.png"
                alt=""
              />
            </Link>
            <button
              onClick={() => showMenuRef.current.classList.toggle('hidden')}
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
                  to="/trips"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Trips
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
              {isAuthenticated ? (
                <div className="py-6">
                  <button
                    onClick={() => logout()}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default AppHeader
