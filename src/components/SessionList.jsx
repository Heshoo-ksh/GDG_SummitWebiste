import PropTypes from 'prop-types'
import SpeakerSessionCard from "./SpeakerSessionCard"

function SessionList({ itemsToMap }) {
  return (
    <ul
      className="grid w-5/6 grid-cols-1 gap-10 py-7"
    >
      {itemsToMap.map((item) => (
        <li
          key={item.id}
        >
          <SpeakerSessionCard name={item.name} title={item.title} speakerImg={item.speakerImg} desc={item.desc} />
        </li>
      ))}
    </ul>
  )
}

SessionList.propTypes = {
  itemsToMap: PropTypes.array.isRequired
}

export default SessionList