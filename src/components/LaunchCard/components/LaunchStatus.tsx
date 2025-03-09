import StatusIcon from './StatusIcon'
import StatusText from './StatusText'

interface LaunchStatusProps {
  success: boolean | null
  fairingsRecovered: boolean | null
}

const LaunchStatus = ({ success, fairingsRecovered }: LaunchStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <StatusIcon success={success} />
      <StatusText success={success} />
      {fairingsRecovered !== null && (
        <div className="ml-4 text-sm text-gray-400">
          Fairings: <span className={fairingsRecovered ? 'text-green-400' : 'text-red-400'}>
            {fairingsRecovered ? 'Recovered' : 'Not Recovered'}
          </span>
        </div>
      )}
    </div>
  )
}

export default LaunchStatus 