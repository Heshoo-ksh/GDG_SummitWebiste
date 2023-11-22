import DevTeamCard from '@/components/dev/DevTeamCard'
import { devTeamData } from '@/data/dev'

const DevTeamSection = () => {
  return (
    <section
      id="devteam"
      className="mb-20 flex flex-wrap items-center justify-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {devTeamData.map((dev, index) => (
          <DevTeamCard
            key={`dev-${index}`}
            id={index}
            name={dev.name}
            avatar={dev.avatar}
            linkedin={dev.linkedin}
            github={dev.github}
            organization={dev.organization}
            position={dev.position}
            university={dev.university}
            bio={dev.bio}
          />
        ))}
      </div>
    </section>
  )
}

export default DevTeamSection
