import { memo } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface EmptyStateProps {
  searchTerm: string
}

const EmptyState = memo(({ searchTerm }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 col-span-full">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-800/50">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-300">
        No launches found
      </h3>
      <p className="mb-6 text-sm text-gray-400">
        No launches match your search "{searchTerm}"
      </p>
    </div>
  )
})

export default EmptyState 