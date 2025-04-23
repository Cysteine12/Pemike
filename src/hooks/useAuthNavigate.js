import useSessionStorage from '@/hooks/useSessionStorage'

const useAuthNavigate = (navigate) => {
  const [redirect] = useSessionStorage('redirect')

  const authNavigate = (user) => {
    if (redirect) {
      sessionStorage.removeItem('redirect')
      return navigate(redirect)
    }

    if (user.role === 'ADMIN') return navigate('/admin/dashboard')
    else return navigate('/dashboard')
  }

  return { authNavigate }
}

export default useAuthNavigate
