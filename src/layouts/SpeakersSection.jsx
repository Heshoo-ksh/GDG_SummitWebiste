import SpeakerCard from '@/components/speakers/SpeakerCard'
import { SpeakerData } from '@/data/sessions'
import { SpeakerProvider } from '@/components/speakers/SpeakerContext'

function SpeakersSection() {
  return (
    <SpeakerProvider>
      <section id="speakers" className="flex items-center justify-center pb-28">
        <div className="grid grid-cols-1 items-stretch gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
