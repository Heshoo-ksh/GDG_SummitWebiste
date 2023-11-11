import SessionList from "@/components/SessionList"
import { SpeakerSessions } from "@/data/sessions"

function SessionsSection() {
  return (
    <section
      id="sessions"
      className="flex items-center justify-center bg-blue-300"
    >
      {/* place sessions tab category here */}
      {
        /*
          My recommendation/approach (you don't have to do this but I wanna help):
            conditionally pass sessions into Session list depending on what is selected
            in the sessions categories tab using child callback so that the SessionList
            component doesn't need to be edited
        */
      }
      <SessionList session={SpeakerSessions} />
    </section>
  )
}

export default SessionsSection
