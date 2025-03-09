import { memo, useMemo } from 'react'
import { CalendarIcon } from '@heroicons/react/24/outline'

interface LaunchDateProps {
  launchDate: string
}

const LaunchDate = memo(({ launchDate }: LaunchDateProps) => {
  const formattedDate = useMemo(() => {
    return new Date(launchDate).toISOString().replace('T', ' ').replace('.000Z', ' UTC')
  }, [launchDate])

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <CalendarIcon className="w-5 h-5 text-blue-400" aria-hidden="true" />
      <time dateTime={launchDate} className="text-gray-200 whitespace-nowrap">{formattedDate}</time>
    </div>
  )
})

export default LaunchDate 