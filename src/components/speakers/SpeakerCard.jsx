import PropTypes from 'prop-types'
import { useContext } from 'react'

import SpeakerDetails from '@/components/speakers/SpeakerDetails'
import TwitterHandle from '@/components/ui/TwitterHandle'
import { SpeakerContext } from './SpeakerContext'

const SpeakerCard = ({
  id,
  name,
  twitter,
  avatar,
  organization,
  position,
  bio,
  sessionTitle,
}) => {
  const { isModalOpen, openModal, closeModal, setSpeakerID, speakerID } = useContext(SpeakerContext);

  const open = () => {
    openModal();
    setSpeakerID(id);
  }
  return (
    <>
      <div
        className="relative mx-auto mb-16 max-w-xs bg-primary-500 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
        onClick={open}
      >
        <div className="overflow-hidden rounded bg-primary-200 shadow-2xl hover:bg-primary-300">
          <div className="absolute -mt-24 flex w-full justify-center">
            <div className="h-48 w-48">
              <img
                src={avatar}
                className="h-full w-full rounded-full object-cover shadow-md"
                alt={name}
              />
              {twitter && <TwitterHandle handle={twitter} />}
            </div>
          </div>
          <div className="mb-4 mt-28 h-20 px-2">
            <h1 className="text-center text-lg font-semibold text-sky-900">
              {name}
            </h1>
            <h3 className="text-center text-base text-sky-900">
              {organization}
            </h3>
            <p className="text-center text-sm text-sky-900">{position}</p>
          </div>
        </div>
      </div>

      {(isModalOpen && id === speakerID) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/75">
          <SpeakerDetails
            name={name}
            bio={bio}
            organization={organization}
            avatar={avatar}
            twitter={twitter}
            sessionTitle={sessionTitle}
            onClose={closeModal}
          />
        </div>
      )}
    </>
  )
}

SpeakerCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  sessionTitle: PropTypes.string.isRequired,
}

export default SpeakerCard
