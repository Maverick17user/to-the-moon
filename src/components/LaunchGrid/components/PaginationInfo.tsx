import { memo } from 'react'

interface PaginationInfoProps {
  startItem: number
  endItem: number
  totalItems: number
  itemsPerPage: number
  onItemsPerPageChange: (itemsPerPage: number) => void
}

const PAGE_SIZE_OPTIONS = [9, 18, 27, 36]

const PaginationInfo = memo(({
  startItem,
  endItem,
  totalItems,
  itemsPerPage,
  onItemsPerPageChange,
}: PaginationInfoProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
      <p>
        Showing <span className="font-medium text-gray-300">{startItem}</span>
        -
        <span className="font-medium text-gray-300"> {endItem} </span>
        of
        <span className="font-medium text-gray-300"> {totalItems} </span>
        launches
      </p>

      <div className="flex items-center gap-3">
        <label htmlFor="itemsPerPage" className="font-medium text-gray-300">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="w-20 h-10 px-4 text-sm font-medium text-blue-200 bg-gray-900 border rounded-lg border-blue-500/20 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50"
        >
          {PAGE_SIZE_OPTIONS.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
    </div>
  )
})

export default PaginationInfo 