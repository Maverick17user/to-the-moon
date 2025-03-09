'use client'

import { memo, useMemo } from 'react'

import { cn } from '@/utils/styles'
import { ClassNameRecord } from '@/types/styles'

interface StatusTextProps {
  success: boolean | null
}

const STATUS_CLASSES: ClassNameRecord = {
  base: 'text-sm font-semibold tracking-wide',
  success: 'text-emerald-400',
  failed: 'text-red-400',
  unknown: 'text-gray-400',
}

const StatusText = memo(({ success }: StatusTextProps) => {
  const { text, colorClass } = useMemo(() => ({
    text: success === true
      ? 'Launch Successful'
      : success === false
        ? 'Launch Failed'
        : 'Status Unknown',
    colorClass: success === true
      ? STATUS_CLASSES.success
      : success === false
        ? STATUS_CLASSES.failed
        : STATUS_CLASSES.unknown
  }), [success])

  return (
    <span className={cn(STATUS_CLASSES.base, colorClass)}>
      {text}
    </span>
  )
})

export default StatusText 