import { create } from 'zustand'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

export const useCountdownStore = create((set, get) => ({
  minute: 0,
  second: 0,
  timer: '',
  isCountdownActive: false,

  startCountdown: async () => {
    set({ minute: 10, second: 0, timer: '⏰ 10:00', isCountdownActive: true })

    const toastId = toast(get().timer, {
      icon: '⏰',
      autoClose: false,
      closeButton: false,
      position: 'top-center',
      style: {
        justifyContent: 'center',
        fontSize: '20px',
        color: 'red',
        width: 'auto',
      },
    })

    const intervalId = setInterval(() => {
      if (!get().minute && !get().second) {
        get().stopCountdown(intervalId, toastId)
      }
      if (!get().second) {
        set({ minute: 1 })
        set({ second: 59 })
      } else {
        set({ second: 1 })
      }

      const formatDigit = (digit) => {
        if (String(digit).length === 2) return digit
        return `0${digit}`
      }
      set({
        timer: `⏰ ${formatDigit(get().minute)}:${formatDigit(get().second)}`,
      })

      toast.update(toastId, {
        render: get().timer,
      })
    }, 1000)
  },

  stopCountdown: (intervalId, toastId) => {
    set({ isCountdownActive: false })

    toast.update(toastId, {
      render: 'Seat Lock Expired',
    })

    setTimeout(() => {
      toast.dismiss(toastId)
    }, 2000)

    clearInterval(intervalId)
    return get().navigate('/')
  },

  navigate: (path) => {
    return useNavigate(path)
  },
}))
