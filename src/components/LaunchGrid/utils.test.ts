import { describe, it, expect } from 'vitest'
import { sortLaunchesByMissionName } from './utils'
import { Launch } from './types'

describe('sortLaunches utils function unit tests', () => {
  const mockLaunches: Launch[] = [
    {
      id: '1',
      mission_name: 'Falcon 9',
      launch_date_utc: '2022-01-01T00:00:00.000Z',
      launch_success: true,
      details: 'Test launch 1',
      links: {
        flickr_images: [],
        mission_patch: null
      },
      mission_id: [],
      rocket: {
        rocket_name: 'Falcon 9',
        fairings: {
          recovered: null
        }
      }
    },
    {
      id: '2',
      mission_name: 'Atlas V',
      launch_date_utc: '2022-02-01T00:00:00.000Z',
      launch_success: false,
      details: 'Test launch 2',
      links: {
        flickr_images: [],
        mission_patch: null
      },
      mission_id: [],
      rocket: {
        rocket_name: 'Atlas V',
        fairings: {
          recovered: null
        }
      }
    }
  ]

  it('should sort launches by mission name in ascending order', () => {
    const sorted = sortLaunchesByMissionName([...mockLaunches])
    expect(sorted[0].mission_name).toBe('Atlas V')
    expect(sorted[1].mission_name).toBe('Falcon 9')
  })

  it('should handle empty array', () => {
    const sorted = sortLaunchesByMissionName([])
    expect(sorted).toEqual([])
  })

  it('should maintain original array order when mission names are equal', () => {
    const launches = [
      { ...mockLaunches[0], mission_name: 'Same Name' },
      { ...mockLaunches[1], mission_name: 'Same Name' }
    ]
    const sorted = sortLaunchesByMissionName(launches)
    expect(sorted[0].id).toBe('1')
    expect(sorted[1].id).toBe('2')
  })
}) 