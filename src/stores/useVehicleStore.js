import { create } from 'zustand'
import { toast } from 'react-toastify'
import API from '@/libs/api'

export const useVehicleStore = create((set, get) => ({
  vehicles: [],
  total: null,
  loading: true,
  message: null,
  error: null,

  fetchVehicles: async ({ page, limit }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/vehicles?page=${page}&limit=${limit}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ vehicles: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  searchVehiclesByLicense: async ({ licenseNo }) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/vehicles/search?licenseNo=${licenseNo}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ vehicles: res.data.data })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  fetchVehicle: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.get(`/vehicles/${id}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ vehicles: [res.data.data] })
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  createVehicle: async (newVehicle) => {
    set({ loading: true, error: null })

    try {
      const res = await API.post(`/vehicles`, newVehicle)

      if (!res.data.success) return toast.error(res.data.message)

      set({ vehicles: [res.data.data] })

      toast.success(res.data.message)
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message })
      toast.error(get().error)
    } finally {
      set({ loading: false })
    }
  },

  updateVehicle: async (id, newVehicle) => {
    set({ loading: true, error: null })

    try {
      const res = await API.patch(`/vehicles/${id}`, newVehicle)

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

  deleteVehicle: async (id) => {
    set({ loading: true, error: null })

    try {
      const res = await API.delete(`/vehicles/${id}`)

      if (!res.data.success) return toast.error(res.data.message)

      set({ vehicles: get().vehicles.filter((vehicle) => vehicle.id !== id) })

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
