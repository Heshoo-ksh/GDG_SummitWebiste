import Arrow from '@/assets/arrow.png'
import DaveKoziel from '@/assets/speakers/Organizers/Dave Koziol.png'
import DonWard from '@/assets/speakers/Organizers/Don Ward.png'
import TwitterHandle from '@/components/ui/TwitterHandle'

const organizers = [
  {
    id: 1,
    image: DonWard,
    name: 'Don Ward',
    role: 'GDG Organizer',
    Company: 'Google',
    url: 'https://gdg.community.dev/u/m8t3sr/',
    twitter: 'donwardpeng',
  },
  {
    id: 2,
    image: DaveKoziel,
    name: 'Dave Koziel',
    role: 'GDG Organizer',
    Company: 'Little Caesars',
    url: 'https://gdg.community.dev/u/mrejqp/',
    twitter: 'davekoziol',
  },
]

function OrganizersSection() {
  return (
    <section id="organizers" className="flex flex-col">
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
      <div className="mt-32 flex items-center justify-center lg:mt-36">
        {organizers.map((organizer) => (
          <div
            key={organizer.id}
            className="relative mx-5 mb-16 w-full max-w-xs grid-cols-2 gap-8 bg-primary-500 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
            onClick={() => window.open(organizer.url, '_blank')}
          >
            <div className="overflow-hidden rounded bg-primary-200 shadow-2xl hover:bg-primary-300">
              <div className="absolute -mt-24 flex w-full justify-center">
                <div className="h-48 w-48">
                  <img
                    src={organizer.image}
                    className="h-full w-full rounded-full object-cover shadow-md"
                    alt={organizer.name}
                  />
                  {organizer.twitter && (
                    <TwitterHandle handle={organizer.twitter} />
                  )}
                </div>
              </div>
              <div className="mb-4 mt-28 h-20 px-2">
                <h1 className="text-center text-lg font-semibold text-sky-900">
                  {organizer.name}
                </h1>
                <h3 className="text-center text-base text-sky-900">
                  {organizer.Company}
                </h3>
                <p className="text-center text-sm text-sky-900">
                  {organizer.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OrganizersSection
