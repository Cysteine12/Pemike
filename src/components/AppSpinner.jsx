import { FaSpinner } from 'react-icons/fa'

const AppSpinner = (loading) => {
  return (
    loading && (
      <FaSpinner className="animate-spin text-blue-500 text-4xl mx-auto my-[100px]" />
    )
  )
}
export default AppSpinner
