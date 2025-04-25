import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const useAdminStore = create((set, get) => ({
  users: [],
  total: null,
  loading: true,
  message: null,
  error: null,

  fetchUsers: async ({ page, limit }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/admin/users?page=${page}&limit=${limit}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ users: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  fetchUsersByRole: async ({ role }, { page, limit }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(
        `/admin/users/${role}/role?page=${page}&limit=${limit}`
      )

      if (!res.data.success) return toast.error(res.data.message)

      set({ users: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  fetchUser: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/admin/users/${id}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ users: [res.data.data] })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
