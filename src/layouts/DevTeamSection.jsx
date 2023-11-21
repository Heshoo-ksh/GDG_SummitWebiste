import { devTeamData } from '@/data/dev'

const DevTeamSection = () => {
  return (
    <section
      id="devteam"
      className="mb-20 flex flex-wrap items-center justify-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {devTeamData.map((dev, index) => (
          <div
            key={index}
            className="group relative mb-10 ml-2 transform-gpu overflow-hidden grayscale transition-transform hover:scale-105 hover:cursor-pointer hover:filter-none"
          >
            <img
              src={dev.avatar}
              alt={`Image ${index + 1}`}
              className="h-56 w-full object-cover object-center "
            />
            <div className="invisible h-20 translate-y-8 bg-primary-300 pt-2 text-center text-sm text-sky-900 transition ease-in-out group-hover:visible group-hover:translate-y-0">
              <h1 className="text-base font-semibold text-sky-900">
                {dev.name}
              </h1>
              <div className="px-2">
                <h3 className="text-sm text-sky-900">
                  {dev.organization || dev.university}
                </h3>
                <p className="text-sm text-sky-900">{dev.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DevTeamSection
