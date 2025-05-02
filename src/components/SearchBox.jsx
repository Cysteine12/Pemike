import { FaSearch } from 'react-icons/fa'
import { useDebounce } from '@/hooks/useDebounce'

const SearchBox = ({ placeholder, searchText, handleSearch }) => {
  const debounce = useDebounce()

  const handleChange = (e) => debounce(handleSearch(e.target.value), 2000)

  return (
    <div className="mx-auto">
      <div className="flex rounded-lg border-2 border-blue-500">
        <input
          type="search"
          value={searchText ?? ''}
          onChange={handleChange}
          placeholder={placeholder}
          className="py-2 px-3 min-w-64 rounded-l-lg"
        />
        <button className="px-3 bg-blue-500 text-white">
          <FaSearch />
        </button>
      </div>
    </div>
  )
}
export default SearchBox
