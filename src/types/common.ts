export interface BaseButtonProps {
  onClick: () => void
  disabled?: boolean
  children?: React.ReactNode
  title?: string
  className?: string
}

export interface PaginationBaseProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface WithAriaProps {
  ariaLabel: string
  title?: string
}