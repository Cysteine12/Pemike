import { FaTimesCircle } from 'react-icons/fa'
import Modal from 'react-modal'
import AppSpinner from './AppSpinner'

const AppModal = ({ children, isModalOpen, setIsModalOpen, loading }) => {
  const el = document.getElementsByClassName('app')

  return (
    <Modal
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick={true}
      appElement={el}
      className={
        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 min-w-72 bg-white rounded-2xl shadow-2xl'
      }
    >
      {loading ? (
        <AppSpinner style={'text-xl my-2'} />
      ) : (
        <>
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <FaTimesCircle className="text-2xl text-red-500" />
          </div>

          {children}
        </>
      )}
    </Modal>
  )
}
export default AppModal
