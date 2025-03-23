const useSessionStorage = (key) => {
  const sessionData = JSON.parse(sessionStorage.getItem(key)) || null

  const setSessionData = (value) =>
    sessionStorage.setItem(key, JSON.stringify(value))

  return [sessionData, setSessionData]
}
export default useSessionStorage
