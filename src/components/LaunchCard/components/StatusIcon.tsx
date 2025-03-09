import { memo, useMemo } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

interface StatusIconProps {
  success: boolean | null
}

const StatusIcon = memo(({ success }: StatusIconProps) => {
  const icon = useMemo(() => {
    if (success === true) {
      return <CheckCircleIcon className="w-5 h-5 text-emerald-400" aria-hidden="true" />
    }
    if (success === false) {
      return <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
    }
    return <InformationCircleIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
  }, [success])

  return icon
})

export default StatusIcon 