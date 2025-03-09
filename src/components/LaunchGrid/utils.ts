import type { Launch } from './types'

export const sortLaunchesByMissionName = (launches: Launch[]) => {
  return [...launches].sort((first, sec) => first.mission_name.localeCompare(sec.mission_name))
}