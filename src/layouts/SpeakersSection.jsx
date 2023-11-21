import SpeakerCard from '@/components/speakers/SpeakerCard'
import { SpeakerData } from '@/data/sessions'
import { SpeakerProvider } from '@/components/speakers/SpeakerContext'

function SpeakersSection() {
  return (
    <SpeakerProvider>
      <section
        id="speakers"
        className="flex flex-col justify-center px-8 sm:px-10 md:px-14 lg:px-16"
      >
        <div className="w-full pt-6 sm:pt-8 md:pt-12 lg:pt-14">
          <header className="font-russell text-4xl md:text-5xl lg:text-6xl">
            Speakers
          </header>
        </div>
        <div className="mt-32 grid grid-cols-1 items-stretch gap-20 sm:grid-cols-2 lg:mt-36 lg:grid-cols-3 xl:grid-cols-4">
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
