import SpeakerCard from '@/components/speakers/SpeakerCard'
import { SpeakerData } from '@/data/sessions'
import { SpeakerProvider } from '@/components/speakers/SpeakerContext'

function SpeakersSection() {
  return (
    <SpeakerProvider>
      <section
        id="speakers"
        className="flex flex-col px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14"
      >
        <header className="mb-32 font-russell text-4xl md:text-5xl lg:mb-36 lg:text-6xl">
          Speakers
        </header>
        <div className="grid grid-cols-1 items-stretch gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SpeakerData.map((speaker, index) => (
            <div key={index}>
              <SpeakerCard
                id={speaker.id}
                name={speaker.name}
                twitter={speaker.twitter}
                avatar={speaker.avatar}
                organization={speaker.organization}
                position={speaker.position}
                bio={speaker.bio}
                sessionTitle={speaker.session.title}
              />
            </div>
          ))}
        </div>
      </section>
    </SpeakerProvider>
  )
}

export default SpeakersSection
