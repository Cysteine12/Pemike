import { useEffect } from 'react'
import useSessionStorage from '../../hooks/useSessionStorage'

const TripsPage = () => {
  const [data] = useSessionStorage('searchParams')

  useEffect(() => {}, [data])

  return (
    <>
      <div>TripsPage {data.tripType}</div>
      <div></div>
    </>
  )
}
export default TripsPage
