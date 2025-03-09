import { memo } from 'react'
import { useSearch } from '../hooks/useSearch'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import type { Launch } from '../types'

interface SearchBarProps {
  onSearchResults: (launches: Launch[], searchTerm: string) => void
  searchTerm?: string
}

export const SearchBar = memo(({ onSearchResults, searchTerm: externalSearchTerm }: SearchBarProps) => {
  const { searchTerm, totalItems, loading, error, handleSearch } = useSearch({
    onResults: onSearchResults
  })

  const handleSearchChange = (value: string) => {
    if (value !== externalSearchTerm) {
      handleSearch(value)
    }
  }

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={externalSearchTerm ?? searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className={`w-full px-4 py-2 pl-10 text-sm bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400
            ${error ? 'border-red-500' : 'border-blue-700'}
            ${loading ? 'pr-12' : ''}`}
          placeholder="Search by mission name or ID..."
          aria-label="Search launches by mission name or ID"
          disabled={loading}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className={`w-5 h-5 ${error ? 'text-red-400' : 'text-gray-400'}`} />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {loading && (
            <div className="w-5 h-5 border-t-2 border-blue-500 rounded-full animate-spin" />
          )}
          {error && (
            <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
          )}
        </div>
      </div>
      <div className="mt-2 min-h-[1.25rem]">
        {error ? (
          <p className="text-sm text-red-400">
            Error searching launches. Please try again.
          </p>
        ) : (externalSearchTerm ?? searchTerm) ? (
          <p className="text-sm text-gray-400">
            {loading ? (
              'Searching...'
            ) : (
              totalItems > 0 ? (
                `Found ${totalItems} ${totalItems === 1 ? 'launch' : 'launches'}`
              ) : (
                'No launches found'
              )
            )}
          </p>
        ) : null}
      </div>
    </div>
  )
})

export default SearchBar 