import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const useTripStore = create((set, get) => ({
  trips: [],
  total: null,
  loading: true,
  message: null,
  error: null,

  fetchTrips: async ({ page, limit }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/trips?page=${page}&limit=${limit}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ trips: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  searchTripsByParams: async ({ source, destination }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(
        `/trips/search?source=${source}&destination=${destination}`
      )

      if (!res.data.success) return toast.error(res.data.message)

      set({ trips: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  fetchTrip: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/trips/${id}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ trips: [res.data.data] })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  createTrip: async (newTrip) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/trips`, newTrip)

      if (!res.data.success) return toast.error(res.data.message)

      set({ trips: [res.data.data] })

      toast.success(res.data.message)
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  updateTrip: async (id, newTrip) => {
    set({ loading: true, error: null })

    try {
      const res = await API.patch(`/trips/${id}`, newTrip)

      if (!res.data.success) return toast.error(res.data.message)

      toast.success(res.data.message)
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  deleteTrip: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.delete(`/trips/${id}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ trips: get().trips.filter((trip) => trip.id !== id) })

      toast.success(res.data.message)
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },
}))
