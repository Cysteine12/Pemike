import axios from 'axios'
import { useAuthStore } from '../stores/useAuthStore'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

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

export default API
