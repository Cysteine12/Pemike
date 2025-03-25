import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'
import { usePaymentStore } from './usePaymentStore'

export const useBookingStore = create((set, get) => ({
  bookings: [],
  loading: false,
  message: null,
  total: null,
  error: null,

  createBooking: async (newBooking) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/bookings`, newBooking)

      if (!res.data.success) return toast.error(res.data.message)

      set({ bookings: [res.data.data] })

      const newPayment = {
        email: res.data.data.user.email,
        amount: res.data.data.trip.fare,
        bookingId: res.data.data.id,
      }

      await usePaymentStore.getState().initializePayment(newPayment)
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
