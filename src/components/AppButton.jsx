import { FaSpinner } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'

const AppButton = ({
  children,
  onClick,
  type = 'button',
  loading = false,
  disabled = false,
  text,
  style,
}) => {
  const { pending } = useFormStatus()

  return (
    <button
      type={type}
      className={`flex flex-row items-center rounded border bg-blue-500 p-2 py-1 text-white justify-center hover:cursor-pointer ${style}`}
      disabled={disabled | pending}
      onClick={onClick}
    >
      {loading | pending ? <FaSpinner /> : children || text}
    </button>
  )
}
export default AppButton
