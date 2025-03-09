'use client'

import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LaunchCard from '../LaunchCard'
import ErrorState from './components/ErrorState'
import EmptyState from './components/EmptyState'
import LoadingSkeleton from './components/LoadingSkeleton'
import SearchBar from './components/SearchBar'
import Pagination from './components/Pagination'
import useLaunches from './hooks/useLaunches'
import type { Launch } from './types'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'

interface LaunchGridProps {
  initialLaunches: Launch[]
}

const LaunchGrid = ({ initialLaunches }: LaunchGridProps) => {
  const router = useRouter()
  const client = useApolloClient()
  const [searchResults, setSearchResults] = useState<Launch[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [hasSearched, setHasSearched] = useState<boolean>(false)

  const handleSearchResults = (launches: Launch[] = [], term: string = '') => {
    setSearchResults(launches)
    setSearchTerm(term)
    setHasSearched(!!term)
  }

  // Determine which launches to show based on search state
  const displayLaunches = hasSearched ? searchResults : initialLaunches

  const {
    visibleLaunches,
    loading,
    error,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    setCurrentPage,
    setItemsPerPage
  } = useLaunches({ 
    launches: displayLaunches,
    initialItemsPerPage: 9
  })

  const handleReset = async () => {
    await client.resetStore()
    router.refresh()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-gray-900 border-b border-gray-800">
          <div className="w-full p-4 mx-auto sm:p-6">
            <div className="flex items-center gap-3 mx-auto max-w-7xl">
              <RocketLaunchIcon className="w-8 h-8 text-blue-500" />
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight transition-all duration-200 sm:text-3xl lg:text-4xl">
                  <span className="text-blue-300">To the </span>
                  <span className="font-bold text-gray-400 line-through">Moon</span>
                  <span className="text-blue-300"> IndyKite</span>
                </h1>
                <p className="text-sm text-gray-400">Explore past and upcoming missions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
          <div className="w-full p-4 mx-auto sm:p-6">
            <div className="flex flex-col gap-6 mx-auto max-w-7xl">
              <SearchBar 
                onSearchResults={handleSearchResults}
                searchTerm={searchTerm}
              />
              {(!hasSearched || (hasSearched && searchResults.length > 0)) && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={totalItems}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                  onItemsPerPageChange={setItemsPerPage}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 mt-[340px] px-4 sm:px-6">
        <section 
          className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl"
          aria-label="Launch missions"
        >
          {loading && <LoadingSkeleton />}
          {error && <ErrorState message={error?.toString() || 'An error occurred'} onRetry={handleReset} />}
          {!loading && !error && hasSearched && searchResults.length === 0 && (
            <EmptyState searchTerm={searchTerm} />
          )}
          {!loading && !error && visibleLaunches.length > 0 && visibleLaunches.map((launch: Launch) => (
            <LaunchCard
              key={launch.id}
              missionName={launch.mission_name}
              missionId={launch.mission_id}
              rocketName={launch.rocket.rocket_name}
              launchDate={launch.launch_date_utc}
              details={launch.details}
              imageUrl={launch.links.flickr_images[0] || launch.links.mission_patch}
              fairingsRecovered={launch.rocket.fairings?.recovered ?? null}
              success={launch.launch_success}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default LaunchGrid 