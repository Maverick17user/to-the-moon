'use client'

import { useMemo, memo } from 'react'
import PaginationInfo from './PaginationInfo'
import PaginationControls from './PaginationControls'

interface PaginationProps {
  currentPage: number
  totalItems: number
  totalPages: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  onItemsPerPageChange: (itemsPerPage: number) => void
}

const Pagination = memo(({
  currentPage,
  totalItems,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) => {
  // Edge case: Ensure current page is within valid bounds
  const validatedCurrentPage = useMemo(() => {
    if (currentPage < 1) return 1
    if (currentPage > totalPages) return totalPages
    return currentPage
  }, [currentPage, totalPages])

  // Calculate start and end items (for current page
  const startItem = useMemo(() => {
    return totalItems > 0 ? Math.min((validatedCurrentPage - 1) * itemsPerPage + 1, totalItems) : 0
  }, [validatedCurrentPage, itemsPerPage, totalItems])

  const endItem = useMemo(() => {
    return totalItems > 0 ? Math.min(startItem + itemsPerPage - 1, totalItems) : 0
  }, [startItem, itemsPerPage, totalItems])

  const handlePageChange = useMemo(() => (page: number) => {
    if (page < 1 || page > totalPages) return
    onPageChange(page)
  }, [totalPages, onPageChange])

  const pages = useMemo(() => {
    const visiblePages = []
    const maxVisiblePages = 5
    const halfVisible = Math.floor(maxVisiblePages / 2)

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i)
      }
    } else {
      let start = Math.max(1, validatedCurrentPage - halfVisible)
      let end = Math.min(totalPages, start + maxVisiblePages - 1)

      if (end - start < maxVisiblePages - 1) {
        start = Math.max(1, end - maxVisiblePages + 1)
      }

      if (start > 1) {
        visiblePages.push(1)
        if (start > 2) visiblePages.push(-1)
      }

      for (let i = start; i <= end; i++) {
        visiblePages.push(i)
      }

      if (end < totalPages) {
        if (end < totalPages - 1) visiblePages.push(-1)
        visiblePages.push(totalPages)
      }
    }

    return visiblePages
  }, [validatedCurrentPage, totalPages])

  return (
    <div className="space-y-4">
      <PaginationInfo
        startItem={startItem}
        endItem={endItem}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
      />
      {!(totalPages <= 1) && (
        <PaginationControls
          currentPage={validatedCurrentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pages={pages}
        />
      )}
    </div>
  )
})

export default Pagination 