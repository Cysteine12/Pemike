import { FaSearch } from 'react-icons/fa'
import { useDebounce } from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'

const SearchBox = ({ placeholder, searchText, handleSearch }) => {
  const [query, setQuery] = useState(searchText)
  const debouncedQuery = useDebounce(query, 1000)

  useEffect(() => {
    if (debouncedQuery) handleSearch(query)
  }, [debouncedQuery])

  return (
    <div className="mx-auto mb-5 w-fit">
      <div className="flex rounded-lg border-2 border-blue-500">
        <input
          type="search"
          value={query ?? ''}
          onChange={(e) => setQuery(e.target.value)}
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
