import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const useSeatStore = create((set, get) => ({
  seats: [],
  sessionID: null,
  total: null,
  loading: true,
  message: null,
  error: null,

  fetchSeatsByTrip: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/seats/trip/${id}`)

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
      const res = await API.post(`/seats/reserve`, newSeat)

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

      set({ sessionID: res.data.data.sessionID })

      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
