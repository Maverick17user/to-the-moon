import { useQuery } from '@apollo/client'
import { useCallback, useState, useEffect, useMemo } from 'react'

import { GET_LAUNCHES } from '../queries'
import { Launch } from '../types'
import { sortLaunchesByMissionName } from '../utils'

interface UseLaunchesProps {
  filters?: {
    search: string
  }
  launches: Launch[]
  initialItemsPerPage?: number
}

interface UseLaunchesReturn {
  visibleLaunches: Launch[]
  loading: boolean
  error: Error | null
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  setCurrentPage: (page: number) => void
  setItemsPerPage: (size: number) => void
}

const useLaunches = ({ 
  filters, 
  launches,
  initialItemsPerPage = 9
}: UseLaunchesProps): UseLaunchesReturn => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage)

  const handleItemsPerPageChange = useCallback((newSize: number) => {
    setItemsPerPage(newSize)
    setCurrentPage(1)
  }, [])

  const sortedLaunches = useMemo(() => {
    return sortLaunchesByMissionName(launches)
  }, [launches])

  const totalItems = useMemo(() => {
    return sortedLaunches.length
  }, [sortedLaunches.length])

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(totalItems / itemsPerPage))
  }, [totalItems, itemsPerPage])

  const visibleLaunches = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return sortedLaunches.slice(start, end)
  }, [sortedLaunches, currentPage, itemsPerPage])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  useEffect(() => {
    setCurrentPage(1)
  }, [filters?.search])

  const handlePageChange = useCallback((page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }, [totalPages])

  return {
    visibleLaunches,
    loading: false,
    error: null,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    setCurrentPage: handlePageChange,
    setItemsPerPage: handleItemsPerPageChange,
  }
}

export default useLaunches 