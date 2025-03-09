import DetailsParagraph from './DetailsParagraph'

interface DetailsTooltipProps {
  details: string
}

const DetailsTooltip = ({ details }: DetailsTooltipProps) => {
  return (
    <div className="absolute left-0 right-0 z-10 invisible mb-2 transition-all duration-300 translate-y-1 opacity-0 group-hover/details:translate-y-0 group-hover/details:opacity-100 group-hover/details:visible bottom-full">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-5 rounded-xl shadow-2xl border border-gray-700/50 text-sm leading-relaxed max-h-[300px] overflow-y-auto backdrop-blur-xl">
        <div className="relative">
          <h3 className="mb-2 font-semibold text-blue-300">Mission Details</h3>
          <div className="space-y-2">
            {details.split('\n').map((paragraph, index) => (
              <DetailsParagraph key={index} content={paragraph} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsTooltip 