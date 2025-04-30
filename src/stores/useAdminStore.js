import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const useAdminStore = create((set, get) => ({
  users: [],
  bookings: [],
  seats: [],
  payments: [],
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
        `/admin/users/role/${role.toLowerCase()}/?page=${page}&limit=${limit}`
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

  fetchSeatsByTrip: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/admin/seats/trip/${id}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ seats: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  reserveSeat: async (newSeat) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/admin/seats/reserve`, newSeat)

      if (!res.data.success) return toast.error(res.data.message)

      const isExist = get().seats.find((seat) => seat.seatNo === newSeat.seatNo)
      if (isExist) {
        set({
          seats: get().seats.map((seat) => {
            if (seat.seatNo === res.data.data.seatNo) return res.data.data
            return seat
          }),
        })
      } else {
        set({ seats: [...get().seats, res.data.data] })
      }

      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  fetchPayments: async ({ page, limit }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/admin/payments?page=${page}&limit=${limit}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ payments: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  fetchPaymentsByStatus: async ({ status }, { page, limit }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(
        `/admin/payments/status/${status}?page=${page}&limit=${limit}`
      )

      if (!res.data.success) return toast.error(res.data.message)

      set({ payments: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
