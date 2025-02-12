import PropTypes from 'prop-types'
import { useContext } from 'react'

import SpeakerDetails from '@/components/speakers/SpeakerDetails'
import GenericCard from '@/components/ui/GenericCard'
import { SpeakerContext } from './SpeakerContext'

const SpeakerCard = ({ id, name, avatar, organization, bio, sessionTitle }) => {
  const { isModalOpen, openModal, closeModal, setSpeakerID, speakerID } =
    useContext(SpeakerContext)

  const open = () => {
    openModal()
    setSpeakerID(id)
  }

  return (
    <>
      <GenericCard {...{ name, avatar, organization, onOpen: open }} />

      {isModalOpen && id === speakerID && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/75">
          <SpeakerDetails
            name={name}
            bio={bio}
            organization={organization}
            avatar={avatar}
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
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  sessionTitle: PropTypes.string.isRequired,
}

export default SpeakerCard
