'use client'

import { memo } from 'react'
import { cn } from '@/utils/styles'
import { ClassNameRecord } from '@/types/styles'

interface PageButtonProps {
  page: number
  currentPage: number
  onClick: () => void
}

const BUTTON_CLASSES: ClassNameRecord = {
  base: 'relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200',
  default: 'text-gray-400 bg-gray-800/50 border border-gray-700/50 hover:text-blue-300 hover:border-blue-500/50 hover:bg-gray-800',
  focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50',
  active: 'active:scale-95 group',
  current: 'text-blue-300 border-blue-500/50 bg-blue-500/10 hover:text-blue-200 hover:border-blue-400/50 pointer-events-none',
  glowBase: 'absolute inset-0 rounded-lg bg-blue-500/10 transition-opacity duration-200',
  glowActive: 'opacity-100',
  glowInactive: 'opacity-0 group-hover:opacity-100'
}

const PageButton = memo(({ page, currentPage, onClick }: PageButtonProps) => {
  const isCurrentPage = page === currentPage

  return (
    <button
      onClick={onClick}
      className={cn(
        BUTTON_CLASSES.base,
        BUTTON_CLASSES.default,
        BUTTON_CLASSES.focus,
        BUTTON_CLASSES.active,
        isCurrentPage ? BUTTON_CLASSES.current : ''
      )}
      aria-label={`Go to page ${page}`}
      aria-current={isCurrentPage ? 'page' : undefined}
    >
      <span className="relative z-10 font-medium">{page}</span>
      <span className={cn(
        BUTTON_CLASSES.glowBase,
        isCurrentPage ? BUTTON_CLASSES.glowActive : BUTTON_CLASSES.glowInactive
      )} />
    </button>
  )
})

export default PageButton 