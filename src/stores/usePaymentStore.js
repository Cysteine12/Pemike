import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const usePaymentStore = create((set, get) => ({
  payments: [],
  loading: false,
  message: null,
  total: null,
  error: null,

  fetchPayment: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/payments/${id}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ payments: [res.data.data] })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  initializePayment: async (newPayment) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/payments/initialize-payment`, newPayment)

      if (!res.data.success) return toast.error(res.data.message)

      window.location.assign(res.data.data)
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  verifyPayment: async (reference, navigate) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/payments/verify-payment/${reference}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ payments: [res.data.data] })

      navigate(`/payments/${res.data.id}`)
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
