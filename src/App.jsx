import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import router from './router'

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer />
    </>
  )
}

export default App
