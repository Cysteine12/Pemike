import { useRef } from 'react'

export const useDebounce = (callback, delay = 1000) => {
  const timeoutRef = useRef()

  return (...args) => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => callback(...args), delay)
  }
}
