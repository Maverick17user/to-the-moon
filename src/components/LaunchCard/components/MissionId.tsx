interface MissionIdProps {
  missionId: string[]
}

export function MissionId({ missionId }: MissionIdProps) {
  if (!missionId.length) return null

  return (
    <p className="text-sm font-medium text-gray-400">
      Mission ID: {missionId.join(', ')}
    </p>
  )
} 