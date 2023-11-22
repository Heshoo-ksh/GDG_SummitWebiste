import Arrow from '@/assets/arrow.png'
import DaveKoziel from '@/assets/speakers/Organizers/Dave Koziol.png'
import DonWard from '@/assets/speakers/Organizers/Don Ward.png'
import GenericCard from '@/components/ui/GenericCard'

const organizers = [
  {
    id: 1,
    name: 'Don Ward',
    twitter: 'donwardpeng',
    avatar: DonWard,
    organization: 'Google',
    position: 'GDG Organizer',
    url: 'https://gdg.community.dev/u/m8t3sr/',
  },
  {
    id: 2,
    name: 'Dave Koziel',
    twitter: 'davekoziol',
    avatar: DaveKoziel,
    organization: 'Little Caesars',
    position: 'GDG Organizer',
    url: 'https://gdg.community.dev/u/mrejqp/',
  },
]

function OrganizersSection() {
  return (
    <section id="organizers" className="flex flex-col justify-center">
      <div className="flex w-full justify-between px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <header className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          Organizers
        </header>
        <img
          src={Arrow}
          alt="Organizers"
          className="h-8 -scale-x-100 md:h-10 lg:h-12"
        />
      </div>
      <div className="mt-32 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:mt-36">
        {organizers.map((organizer) => (
          <GenericCard
            key={organizer.id}
            onOpen={() => window.open(organizer.url, '_blank')}
            {...organizer}
          />
        ))}
      </div>
    </section>
  )
}

export default OrganizersSection
