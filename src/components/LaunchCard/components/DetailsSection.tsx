import NoDetails from './NoDetails'
import DetailsTooltip from './DetailsTooltip'

interface DetailsSectionProps {
  details: string | null
}

const DetailsSection = ({ details }: DetailsSectionProps) => {
  if (!details) {
    return <NoDetails />
  }

  return (
    <div className="relative group/details">
      <p className="text-sm leading-relaxed text-gray-300 transition-colors duration-200 cursor-pointer line-clamp-3 hover:text-gray-200">
        {details}
      </p>
      <DetailsTooltip details={details} />
    </div>
  )
}

export default DetailsSection 