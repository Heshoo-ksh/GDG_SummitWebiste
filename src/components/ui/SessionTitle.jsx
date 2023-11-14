import Mic from '@/assets/Mic.svg'
import PropTypes from 'prop-types'
import { useState } from 'react'

const SessionTitle = (props) => {
  const [isExpanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded(!isExpanded)
  }

  return (
    <div
      className={`relative ${
        isExpanded ? 'h-28 w-[100%] rounded-full' : 'h-28 w-28 rounded-full'
      } flex cursor-pointer flex-row items-center justify-center bg-blue-500 transition-all duration-300 ease-in-out`}
      onClick={handleToggle}
      title="View session title"
    >
      <img className={isExpanded && 'ml-4'} src={Mic} alt="Microphone Icon" />
      {isExpanded && (
        <div className="mt-2">
          <p className="text-lg text-gray-200">Talking About</p>
          <p className="text-xl font-bold  text-white">{props.sessionTitle}</p>
        </div>
      )}
    </div>
  )
}

SessionTitle.propTypes = {
  sessionTitle: PropTypes.string.isRequired,
}

export default SessionTitle
