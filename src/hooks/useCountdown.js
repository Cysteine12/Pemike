import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const useCountdown = () => {
  let navigate = useNavigate()
  const [isCountdownActive, setIsCountdownActive] = useState(false)

  const startCountdown = () => {
    setIsCountdownActive(true)
    let minute = 10
    let second = 0
    let timer = '⏰ 10:00'

    const toastId = toast(timer, {
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

    const timerInterval = setInterval(() => {
      if (!minute && !second) {
        setIsCountdownActive(false)
        toast.update(toastId, {
          render: 'Seat Lock Expired',
        })
        setTimeout(() => {
          toast.dismiss(toastId)
        }, 2000)
        clearInterval(timerInterval)
        return navigate('/')
      }
      if (!second) {
        minute -= 1
        second = 59
      } else {
        second -= 1
      }

      const formatDigit = (digit) => {
        if (String(digit).length === 2) return digit
        return `0${digit}`
      }
      timer = `⏰ ${formatDigit(minute)}:${formatDigit(second)}`

      toast.update(toastId, {
        render: timer,
      })
    }, 1000)
  }

  return { isCountdownActive, startCountdown }
}
