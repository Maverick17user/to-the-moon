interface ErrorStateProps {
  message: string
  onRetry: () => void
}

const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
  return (
    <div role="alert" className="p-4 text-red-800 rounded-lg bg-red-50">
      <h3 className="mb-2 font-semibold">Error Loading Launches</h3>
      <p>{message}</p>
      <button 
        onClick={onRetry}
        className="px-4 py-2 mt-4 transition-colors rounded-lg bg-red-100 hover:bg-red-200"
      >
        Try Again
      </button>
    </div>
  )
}

export default ErrorState 