const useLocalStorage = (key) => {
  const data = localStorage.getItem(key)

  const setData = (value) => localStorage.setItem(key, JSON.stringify(value))

  return [data, setData]
}
export default useLocalStorage
