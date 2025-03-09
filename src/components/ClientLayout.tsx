'use client'

import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo-client'
import { LaunchGrid } from '@/components'
import type { Launch } from '@/components/LaunchGrid/types'

interface ClientLayoutProps {
  initialLaunches: Launch[]
}

export default function ClientLayout({ initialLaunches }: ClientLayoutProps) {
  return (
    <ApolloProvider client={client}>
      <LaunchGrid initialLaunches={initialLaunches} />
    </ApolloProvider>
  )
} 