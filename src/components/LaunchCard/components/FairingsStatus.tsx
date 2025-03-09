import { memo } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

interface FairingsStatusProps {
  recovered: boolean | null
}

const FairingsStatus = memo(({ recovered }: FairingsStatusProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-400">Fairings:</span>
        {recovered === null ? (
          <div className="flex items-center gap-1.5">
            <InformationCircleIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500">
              Status Unknown
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${
              recovered 
                ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' 
                : 'bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.5)]'
            }`} />
            <span className={`text-sm font-medium ${
              recovered ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {recovered ? 'Recovered' : 'Not Recovered'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
})

export default FairingsStatus 