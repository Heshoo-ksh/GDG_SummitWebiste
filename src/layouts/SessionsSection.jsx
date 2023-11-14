import SpeakerSessionCard from '@/components/SpeakerSessionCard'
import StylableComponentList from '@/components/StylableComponentList'
import { SpeakerData } from '@/data/sessions'

function SessionsSection() {
  return (
    <section
      id="sessions"
      className="flex items-center justify-center bg-blue-300"
    >
      {/* place sessions tab category here */}
      {/*
          My recommendation/approach (you don't have to do this but I wanna help):
            conditionally pass sessions into Session list depending on what is selected
            in the sessions categories tab using child callback so that the SessionList
            component doesn't need to be edited
        */}
      <StylableComponentList
        childComponentData={SpeakerData.map((speaker) => {
          return {
            id: speaker.id,
            speakerName: speaker.name,
            speakerAvatar: speaker.avatar,
            sessionTitle: speaker.session.title,
            sessionDesc: speaker.session.description,
          }
        })}
        childComponent={SpeakerSessionCard}
        className="grid w-5/6 grid-cols-1 gap-10 py-7"
      />
    </section>
  )
}

export default SessionsSection
