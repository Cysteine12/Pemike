import axios from 'axios'
import { useAuthStore } from '../stores/useAuthStore'
import { toast } from 'react-toastify'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 429) {
      toast.error(error.response?.message)
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const { refreshToken, logout } = useAuthStore()
      try {
        await refreshToken()

        return API(originalRequest)
      } catch (err) {
        await logout()

        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

// API.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     console.log(error.message)
//     const originalRequest = error.config

// if (error.response?.status === 429) {
//   toast.error(error.response?.message)
// }

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       console.log('refresh-token1')
//       originalRequest._retry = true
//       console.log('refresh-token2')

//       const { refreshToken, logout } = useAuthStore()
//       console.log('refresh-token3')
//       try {
//         console.log('refresh-token4')
//         await refreshToken()
//         console.log('refresh-token5')

//         return API(originalRequest)
//       } catch (err) {
//         await logout()

//         return Promise.reject(err)
//       }
//     }
//     return Promise.reject(error)
//   }
// )

export default API
