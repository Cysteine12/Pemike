import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const usePaymentStore = create((set, get) => ({
  payments: [],
  loading: true,
  message: null,
  total: null,
  error: null,

  fetchPayments: async ({ page, limit }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/payments?page=${page}&limit=${limit}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ payments: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

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

      toast.info('Redirecting...')

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
      toast.success(res.data.message)

      navigate(`/payments/${res.data.data.id}`)
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
