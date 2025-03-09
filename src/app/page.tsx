import { GET_LAUNCHES } from '@/components/LaunchGrid/queries'
import { client } from '@/lib/apollo-client'
import type { Launch } from '@/components/LaunchGrid/types'
import ClientLayout from '../components/ClientLayout'

async function getInitialLaunches() {
  const { data } = await client.query({
    query: GET_LAUNCHES
  })

  return data?.launches ?? []
}

export default async function HomePage() {
  const initialLaunches: Launch[] = await getInitialLaunches()

  return (
    <main className="min-h-screen overflow-x-hidden text-gray-100 bg-gray-900">
      <div className="container px-4 py-6 mx-auto sm:px-6 sm:py-8 max-w-7xl">
        <ClientLayout initialLaunches={initialLaunches} />
      </div>
    </main>
  )
}