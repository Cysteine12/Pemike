import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const useUserStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  message: null,
  error: null,

  fetchProfile: async () => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/users/profile`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ user: res.data.user })

      localStorage.setItem('user', JSON.stringify(get().user))
    } catch (err) {
      localStorage.removeItem('user')
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  updateProfile: async (newUser) => {
    set({ loading: true, error: null })

    try {
      const res = await API.patch(`/users/profile`, newUser)

      if (!res.data.success) return toast.error(res.data.message)

      set({ user: res.data.user })
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
