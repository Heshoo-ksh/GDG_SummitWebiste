import SpeakersLogo from '@/assets/images/speakers-logo.png'
import SpeakerCard from '@/components/speakers/SpeakerCard'
import { SpeakerProvider } from '@/components/speakers/SpeakerContext'
import { SpeakersData } from '@/data/speakers'

// import defaultAvatar from '@/assets/images/speakers/default profile.png'

function SpeakersSection() {
  const uniqueSpeakers = SpeakersData.filter(
    (speaker, index, self) =>
      // WARNING: if there are multiple speakers with no names, only the first will be rendered. i hope this does not matter later in production as every speaker should eventually have a name
      index === self.findIndex((s) => s.name === speaker.name) // changed from email to name
  )

  // use to only render speakers that have a picture
  // const picturedSpeakers = uniqueSpeakers.filter(
  //   (s) => s.avatar.trim() !== defaultAvatar
  // )

  return (
    <SpeakerProvider>
      <section
        id="speakers"
        className="flex flex-col justify-center px-8 sm:px-10 md:px-14 lg:px-16"
      >
        <div className="flex w-full justify-between pt-6 sm:pt-8 md:pt-12 lg:pt-14">
          <header className="m-auto text-center font-russell text-4xl md:text-5xl lg:text-6xl">
            Speakers
          </header>
          <img
            src={SpeakersLogo}
            alt="Speakers"
            className="h-8 md:h-10 lg:h-12"
          />
        </div>

        <div className="mt-32 grid grid-cols-1 items-stretch gap-20 whitespace-pre-wrap sm:grid-cols-2 lg:mt-36 lg:grid-cols-3 xl:grid-cols-4">
          {uniqueSpeakers.map((speaker, index) => (
            <div key={index}>
              <SpeakerCard
                id={speaker.id}
                name={speaker.name}
                avatar={speaker.avatar}
                organization={speaker.organization}
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
