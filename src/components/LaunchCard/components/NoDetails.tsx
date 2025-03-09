import { memo } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

const NoDetails = memo(() => {
  return (
    <p className="flex items-center gap-2 text-sm text-gray-400">
      <InformationCircleIcon className="w-5 h-5 opacity-75" aria-hidden="true" />
      No mission details available
    </p>
  )
})

export default NoDetails 