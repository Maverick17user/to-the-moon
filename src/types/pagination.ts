export interface PaginationItemsProps {
  itemsPerPage: number
  totalItems: number
  onItemsPerPageChange: (size: number) => void
}

export interface PaginationState {
  currentPage: number
  totalPages: number
  startItem: number
  endItem: number
}

export interface PaginationActions {
  onPageChange: (page: number) => void
  onItemsPerPageChange: (size: number) => void
}

export type PaginationSize = 9 | 18 | 27 | 36

export const PAGE_SIZE_OPTIONS: PaginationSize[] = [9, 18, 27, 36] 