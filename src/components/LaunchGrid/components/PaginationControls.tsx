'use client'

import { useCallback, memo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import PageButton from './Pagination/PageButton'
import NavigationButton from './Pagination/NavigationButton'

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  pages: number[]
}

const PaginationControls = memo(({
  currentPage,
  totalPages,
  onPageChange,
  pages,
}: PaginationControlsProps) => {
  const handlePageClick = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }, [totalPages, onPageChange])

  return (
    <div className="flex items-center justify-center gap-2">
      <NavigationButton
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
        ariaLabel="Go to first page"
      >
        <ChevronDoubleLeftIcon className="w-5 h-5" />
      </NavigationButton>

      <NavigationButton
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        ariaLabel="Previous page"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </NavigationButton>

      <div className="items-center hidden gap-2 sm:flex">
        {pages.map((page, index) => (
          page === -1 ? (
            <span key={`ellipsis-${index}`} className="w-10 text-center text-gray-500">...</span>
          ) : (
            <PageButton
              key={page}
              page={page}
              currentPage={currentPage}
              onClick={() => handlePageClick(page)}
            />
          )
        ))}
      </div>

      <NavigationButton
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        ariaLabel="Next page"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </NavigationButton>

      <NavigationButton
        onClick={() => handlePageClick(totalPages)}
        disabled={currentPage === totalPages}
        ariaLabel="Go to last page"
      >
        <ChevronDoubleRightIcon className="w-5 h-5" />
      </NavigationButton>
    </div>
  )
})

export default PaginationControls 