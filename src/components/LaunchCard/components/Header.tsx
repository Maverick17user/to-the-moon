import { MissionId } from './MissionId'

interface HeaderProps {
  missionName: string
  missionId: string[]
  rocketName: string
}

const Header = ({ missionName, missionId }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-2">
      <h2 className="text-xl font-bold tracking-tight text-gray-100 transition-colors duration-200 group-hover:text-blue-300">
        {missionName}
      </h2>
      <MissionId missionId={missionId} />
    </header>
  )
}

export default Header 