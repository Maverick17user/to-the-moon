'use client'

import { memo } from 'react'
import { cn } from '@/utils/styles'
import { ClassNameRecord } from '@/types/styles'
import { BaseButtonProps, WithAriaProps } from '@/types/common'

interface NavigationButtonProps extends BaseButtonProps, WithAriaProps {}

const BUTTON_CLASSES: ClassNameRecord = {
  base: 'relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200',
  default: 'text-gray-400 bg-gray-800/50 border border-gray-700/50',
  hover: 'hover:text-blue-300 hover:border-blue-500/50 hover:bg-gray-800',
  focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50',
  active: 'active:scale-95 group',
  disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:hover:text-gray-400',
  glow: 'absolute inset-0 rounded-lg bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
}

const NavigationButton = memo(({ onClick, disabled, children, title, ariaLabel }: NavigationButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      BUTTON_CLASSES.base,
      BUTTON_CLASSES.default,
      BUTTON_CLASSES.hover,
      BUTTON_CLASSES.focus,
      BUTTON_CLASSES.active,
      BUTTON_CLASSES.disabled
    )}
    title={title}
    aria-label={ariaLabel}
  >
    {children}
    <span className={BUTTON_CLASSES.glow} />
  </button>
))

export default NavigationButton 