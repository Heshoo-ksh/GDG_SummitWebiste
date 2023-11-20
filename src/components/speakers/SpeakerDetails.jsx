import PropTypes from 'prop-types'
import { useContext } from 'react'

import FlippableChevronIcon from '@/components/ui/FlippableChevronIcon'
import TwitterHandle from '@/components/ui/TwitterHandle'
import { DIRECTION } from '@/constants/directions'
import SessionTitle from '@components/sessions/SessionTitle'
import CloseIcon from '@components/ui/CloseIcon'
import { SpeakerContext } from './SpeakerContext'

function SpeakerDetails(props) {
  const { speakerID, setSpeakerID, numSpeakers } = useContext(SpeakerContext)
  const goLastSpeaker = () => {
    setSpeakerID((id) => (id - 1 <= 0 ? numSpeakers : id - 1))
  }
  const goNextSpeaker = () => {
    setSpeakerID(speakerID + 1 >= numSpeakers ? 1 : speakerID + 1)
  }

  return (
    <div className="relative inset-0 h-[900px] w-[1600px] shrink-0 bg-[url(@/assets/speaker-details-modal.png)] bg-contain bg-center bg-no-repeat">
      <div onClick={() => props.onClose()}>
        <CloseIcon />
      </div>
      <div className="flex items-center">
        <div
          onClick={goLastSpeaker}
          className="cursor-pointer transition-all hover:scale-110"
        >
          <FlippableChevronIcon
            direction={DIRECTION.LEFT}
            strokeColor={'#000000'}
          />
        </div>
        <div className="ml-[120px] mt-[400px] shrink-0">
          <div className="relative">
            <img
              className="h-[400px] w-[403px]"
              src={props.avatar}
              alt="speaker image"
            />
            {props.twitter && <TwitterHandle handle={props.twitter} />}
          </div>
          <div className="h-20 px-2">
            <h1 className="mt-3 text-center text-4xl font-bold text-black">
              {props.name}
            </h1>
            <h3 className="text-center font-semibold text-black">
              {props.organization}
            </h3>
          </div>
        </div>
        <div className="ml-[180px] mr-[25px] mt-[200px] flex flex-col">
          <div className="max-h-[600px] overflow-y-auto">
            <p className="text-justify text-xl font-normal text-white">
              {props.bio}
            </p>
          </div>
          <SessionTitle sessionTitle={props.sessionTitle} />
        </div>
        <div
          onClick={goNextSpeaker}
          className="cursor-pointer transition-all hover:scale-110"
        >
          <FlippableChevronIcon
            direction={DIRECTION.RIGHT}
            strokeColor={'#4285F4'}
          />
        </div>
      </div>
    </div>
  )
}

SpeakerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  sessionTitle: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default SpeakerDetails
