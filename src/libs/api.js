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
    console.log(error)
    const originalRequest = error.config

    if (error.response?.status === 429) {
      toast.error(error.response?.message)
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const { refreshToken, logout } = useAuthStore()
      try {
        console.log('refresh-token1')
        await refreshToken()
        console.log('refresh-token2')

        return API(originalRequest)
      } catch (err) {
        await logout()

        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export default API
