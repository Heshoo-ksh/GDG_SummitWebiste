import PropTypes from 'prop-types'
import SpeakerSessionCard from "./SpeakerSessionCard"

function SessionList({ session }) {
  return (
    <ul
      className="grid w-5/6 grid-cols-1 gap-10 py-7"
    >
      {session.map(({ id, speakerName, sessionTitle, speakerImg, sessionDesc }) => (
        <li
          key={id}
        >
          <SpeakerSessionCard
            speakerName={speakerName}
            sessionTitle={sessionTitle}
            speakerImg={speakerImg}
            sessionDesc={sessionDesc}
          />
        </li>
      ))}
    </ul>
  )
}

SessionList.propTypes = {
  session: PropTypes.array.isRequired
}

export default SessionList