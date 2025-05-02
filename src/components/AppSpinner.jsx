import { FaSpinner } from 'react-icons/fa'

const AppSpinner = ({ loading, style }) => {
  return (
    loading && (
      <FaSpinner
        className={`animate-spin text-blue-500 text-4xl text-center my-[100px] ${style}`}
      />
    )
  )
}
export default AppSpinner
