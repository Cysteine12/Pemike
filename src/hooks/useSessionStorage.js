const useSessionStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key))

  const setData = (value) => sessionStorage.setItem(key, JSON.stringify(value))

  return [data, setData]
}
export default useSessionStorage
