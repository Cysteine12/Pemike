import { FaSpinner } from 'react-icons/fa'

const AppSpinner = ({ loading = true, style }) => {
  return (
    loading && (
      <FaSpinner
        className={`animate-spin text-blue-500 text-4xl mx-auto my-[100px] ${style}`}
      />
    )
  )
}
export default AppSpinner
