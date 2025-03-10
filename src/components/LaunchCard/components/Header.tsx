import { MissionId } from './MissionId'

interface HeaderProps {
  missionName: string
  missionId: string[]
  rocketName: string
}

const Header = ({ missionName, missionId }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-2">
      <h2
        className="text-xl font-bold text-gray-100 line-clamp-2"
        data-testid="mission-name"
      >
        {missionName}
      </h2>
      <MissionId missionId={missionId} />
    </header>
  )
}

export default Header 