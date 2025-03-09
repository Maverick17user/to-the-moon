import { useState, useMemo, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { SEARCH_LAUNCHES } from '../queries'
import type { Launch } from '../types'
import { useDebouncedCallback } from 'use-debounce'
import { sortLaunchesByMissionName } from '../utils'

interface SearchQueryData {
  launches: Launch[]
}

interface UseSearchProps {
  onResults: (launches: Launch[], searchTerm: string) => void
}

interface UseSearchReturn {
  searchTerm: string
  results: Launch[] | null
  totalItems: number
  loading: boolean
  handleSearch: (value: string) => void
  error: Error | null
}

export const useSearch = ({ onResults }: UseSearchProps): UseSearchReturn => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  
  const { data: searchData, loading, error } = useQuery<SearchQueryData>(SEARCH_LAUNCHES, {
    fetchPolicy: 'cache-first',
  })

  const filteredLaunches = useMemo(() => {
    if (!searchData?.launches) return null
    if (!debouncedTerm.trim()) return sortLaunchesByMissionName(searchData.launches)

    const searchValue = debouncedTerm.trim().toLowerCase()
    const terms = searchValue.split(/\s+/).filter(Boolean)

    const filtered = searchData.launches.filter(launch => {
      if (terms.length === 0) return true

      const missionNameLower = launch.mission_name.toLowerCase()
      const missionIdsLower = launch.mission_id.map(id => id.toLowerCase())

      return terms.every(term => 
        missionNameLower.includes(term) || 
        missionIdsLower.some(id => id.includes(term))
      )
    })

    return sortLaunchesByMissionName(filtered)
  }, [searchData?.launches, debouncedTerm])

  const handleSearch = useDebouncedCallback((value: string) => {
    setDebouncedTerm(value.trim())
  }, 500)

  // Update UI immediately while search is being debounced
  const handleSearchImmediate = (value: string) => {
    setSearchTerm(value)
    handleSearch(value)
  }

  // Update results only when debounced term or data changes
  useEffect(() => {
    if (filteredLaunches) {
      onResults(filteredLaunches, searchTerm)
    }
  }, [filteredLaunches, searchTerm, onResults])

  // Reset search when there's an error
  useEffect(() => {
    if (error) {
      setSearchTerm('')
      setDebouncedTerm('')
      onResults([], '')
    }
  }, [error, onResults])

  return {
    searchTerm,
    results: filteredLaunches,
    totalItems: filteredLaunches?.length ?? 0,
    loading,
    handleSearch: handleSearchImmediate,
    error: error as Error | null
  }
}

export default useSearch 