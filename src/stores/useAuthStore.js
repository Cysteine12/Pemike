import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'
import axios from 'axios'

const API2 = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export const useAuthStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  message: null,
  error: null,

  isAuthenticated: () => !!get().user,
  userRole: () => get().user?.role,

  register: async (newUser) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/auth/register`, newUser)
      if (!res.data.success) return toast.error(res.data.message)

      set({ user: res.data.data })
      set({ message: res.data.message })

      toast.success(get().message)

      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  login: async (newUser) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/auth/login`, newUser)
      if (!res.data.success) return toast.error(res.data.message)

      set({ user: res.data.user })
      set({ message: res.data.message })

      localStorage.setItem('user', JSON.stringify(get().user))

      toast.success(get().message)
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      if (get().error === 'verify-email') {
        return { type: get().error }
      }
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  verifyEmail: async (newUser) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/auth/verify-email`, newUser)
      if (!res.data.success) return toast.error(res.data.message)

      set({ user: res.data.user })
      set({ message: res.data.message })

      localStorage.setItem('user', JSON.stringify(get().user))

      toast.success(get().message)
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
    } finally {
      set({ loading: false })
    }
  },

  refreshToken: async () => {
    set({ loading: true, error: null })
    console.log('ran')
    try {
      await API2.post(`/auth/refresh-token`)
      return
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  requestOTP: async (formData) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/auth/request-otp`, formData)
      if (!res.data.success) return toast.error(res.data.message)

      toast.success('OTP has been sent to your email')
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  verifyOTP: async (formData) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/auth/verify-otp`, formData)
      if (!res.data.success) return toast.error(res.data.message)

      toast.success('OTP verified')

      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  logout: async () => {
    set({ loading: true, error: null })

    try {
      const res = await API2.post(`/auth/logout`)
      if (!res.data.success) return toast.error(res.data.message)

      set({ message: res.data.message })

      localStorage.removeItem('user')
      toast.success(get().message)

      location.assign('/login')
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
