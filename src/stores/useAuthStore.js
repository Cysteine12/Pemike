import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const useAuthStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  message: null,
  error: null,

  isAuthenticated: () => !!get().user,
  userRole: () => get().user?.role,

  login: async (newUser) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/auth`, newUser)
      if (!res.data.success) return toast.error(res.data.message)

      set({ user: res.data.data })
      set({ message: res.data.message })

      localStorage.setItem('user', JSON.stringify(get().user))

      toast.success(get().message)
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
