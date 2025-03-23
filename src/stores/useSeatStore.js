import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const useSeatStore = create((set, get) => ({
  seats: [],
  sessionToken: null,
  total: null,
  loading: true,
  message: null,
  error: null,

  fetchSeatsByTrip: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/seats/trip/${id}`)

      if (!res.data.success) toast.error(res.data.message)

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
      const res = await API.post(`/seats/reserve`, newSeat)

      if (!res.data.success) toast.error(res.data.message)

      set({
        seats: get().seats.map((seat) => {
          if (seat.seatNo === res.data.data.seatNo) seat = res.data.data
          return seat
        }),
        sessionToken: res.data.data.sessionToken,
      })

      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
