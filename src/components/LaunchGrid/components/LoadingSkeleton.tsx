/**
 * Custom skeleton for launch cards
 */
const LoadingSkeleton = () => {
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className="flex flex-col h-full p-6 transition-all duration-200 border border-gray-700 rounded-xl bg-gray-800/50 animate-pulse"
        >
          <div className="w-full h-48 mb-4 overflow-hidden bg-gray-700 rounded-lg" />
          <div className="space-y-4">
            <div className="w-3/4 h-6 bg-gray-700 rounded" />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-700 rounded-full" />
              <div className="w-1/2 h-4 bg-gray-700 rounded" />
            </div>
            <div className="w-full h-20 bg-gray-700 rounded" />
          </div>
        </div>
      ))}
    </>
  )
}

export default LoadingSkeleton 