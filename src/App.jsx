import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import router from './router'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>

      <ToastContainer />
    </>
  )
}

export default App
