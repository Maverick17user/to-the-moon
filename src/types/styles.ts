import { HTMLAttributes } from 'react'

export type ClassNameRecord = Record<string, HTMLAttributes<HTMLElement>['className']>

export const BUTTON_STYLES: ClassNameRecord = {
  base: 'px-3 py-1 text-sm transition-all duration-200 border rounded-lg',
  focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
  active: 'active:transform active:scale-95',
  hover: 'hover:border-blue-500 hover:text-blue-300 hover:shadow-md hover:shadow-blue-500/10',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-700 disabled:hover:text-gray-300 disabled:hover:shadow-none',
  default: 'text-gray-300 bg-gray-800 border-gray-700',
  primary: 'bg-blue-500 text-white border-blue-500',
}

export const INPUT_STYLES: ClassNameRecord = {
  base: 'px-2 py-1 text-gray-200 transition-all duration-200 bg-gray-800 border border-gray-700 rounded-lg',
  focus: 'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none',
  hover: 'hover:border-blue-500',
}

export const FORM_LABEL_STYLES: ClassNameRecord = {
  base: 'text-sm text-gray-300 transition-colors duration-200',
  nowrap: 'whitespace-nowrap',
}