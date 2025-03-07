import { FaSpinner } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'

const AppButton = ({
  children,
  type = 'button',
  loading = false,
  disabled = false,
  style,
}) => {
  const { pending } = useFormStatus()

  return (
    <button
      type={type}
      className={`flex flex-row items-center rounded border bg-blue-600 p-2 py-1 text-white hover:cursor-pointer ${style}`}
      disabled={disabled | pending}
    >
      {loading | pending ? <FaSpinner /> : children}
    </button>
  )
}
export default AppButton
