'use client'

import dynamic from 'next/dynamic'

const ImageSection = dynamic(() => import('./components/ImageSection'), {
  ssr: false,
  loading: () => (
    <div className={LOADING_CLASSES.wrapper}>
      <div className={LOADING_CLASSES.inner}>
        <div className={LOADING_CLASSES.spinner} />
      </div>
    </div>
  )
})

const Header = dynamic(() => import('./components/Header'))
const LaunchDate = dynamic(() => import('./components/LaunchDate'))
const DetailsSection = dynamic(() => import('./components/DetailsSection'))
const FairingsStatus = dynamic(() => import('./components/FairingsStatus'))

const CARD_CLASSES = {
  base: `relative flex flex-col overflow-hidden transition-all duration-300 bg-gray-900/80 backdrop-blur-sm rounded-xl 
         group hover:bg-gray-900/90 focus-within:bg-gray-900/90 cursor-pointer h-full`,
  wrapper: 'relative z-10 flex flex-col flex-1 p-6 gap-6',
  border: `before:absolute before:inset-0 before:rounded-xl before:border before:border-blue-500/20 before:transition-colors 
           hover:before:border-blue-400/50 focus-within:before:border-blue-400/50
           after:absolute after:inset-[1px] after:rounded-xl after:border after:border-gray-800 after:transition-colors 
           group-hover:after:border-gray-700 focus-within:after:border-gray-700`,
  glow: `before:absolute before:-z-10 before:inset-0 before:transition-opacity before:duration-500 before:opacity-0 before:blur-xl before:bg-blue-500/10 
         group-hover:before:opacity-100 focus-within:before:opacity-100`
}

const LOADING_CLASSES = {
  wrapper: 'relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border border-gray-800/50',
  inner: 'absolute inset-0 flex items-center justify-center',
  spinner: 'w-8 h-8 border-4 border-blue-900 rounded-full border-t-blue-400 animate-spin',
}

interface LaunchCardProps {
  missionName: string
  missionId: string[]
  rocketName: string
  launchDate: string
  details: string | null
  imageUrl: string | null
  fairingsRecovered: boolean | null
  success: boolean | null 
}

const LaunchCard = ({
  missionName,
  missionId,
  rocketName,
  launchDate,
  details,
  imageUrl,
  fairingsRecovered,
}: LaunchCardProps) => {
  return (
    <article 
      className={`${CARD_CLASSES.base} ${CARD_CLASSES.border} ${CARD_CLASSES.glow}`}
      tabIndex={0}
      aria-label={`${missionName} mission details`}
    >
      <div className={CARD_CLASSES.wrapper}>
        <ImageSection imageUrl={imageUrl} missionName={missionName} />
        <div className="flex flex-col gap-4">
          <Header
            missionName={missionName}
            missionId={missionId}
            rocketName={rocketName}
          />
          <LaunchDate launchDate={launchDate} />
          <DetailsSection details={details} />
          <FairingsStatus recovered={fairingsRecovered} />
        </div>
      </div>
    </article>
  )
}

export default LaunchCard 