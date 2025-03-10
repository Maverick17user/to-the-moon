import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StatusText from './StatusText'

describe('StatusText component unit tests', () => {
  it('should display success message when success is true', () => {
    render(<StatusText success={true} />)
    expect(screen.getByText('Launch Successful')).toBeInTheDocument()
    expect(screen.getByText('Launch Successful')).toHaveClass('text-emerald-400')
  })

  it('should display failure message when success is false', () => {
    render(<StatusText success={false} />)
    expect(screen.getByText('Launch Failed')).toBeInTheDocument()
    expect(screen.getByText('Launch Failed')).toHaveClass('text-red-400')
  })

  it('should display unknown status when success is null', () => {
    render(<StatusText success={null} />)
    expect(screen.getByText('Status Unknown')).toBeInTheDocument()
    expect(screen.getByText('Status Unknown')).toHaveClass('text-gray-400')
  })
}) 