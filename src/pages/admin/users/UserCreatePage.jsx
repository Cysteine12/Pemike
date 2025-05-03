import UserCreateForm from '@/features/user/UserCreateForm'
import { useAdminStore } from '@/stores/useAdminStore'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const UserCreatePage = () => {
  const navigate = useNavigate()
  const { createUser } = useAdminStore()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'MALE',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async () => {
    const res = await createUser(formData)
    if (!res || !res.success) return

    return navigate(`/admin/users/${res.data.id}`)
  }

  return (
    <main className="flex items-center justify-center">
      <UserCreateForm
        formData={formData}
        setFormData={setFormData}
        formTitle={'Add New User!'}
        handleSubmit={handleSubmit}
      />
    </main>
  )
}

export default UserCreatePage
