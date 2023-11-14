import PropTypes from 'prop-types'
import twitterLogo from '@/assets/Twitter_Logo.png'
import SpeakerDetails from '@/components/ui/SpeakerDetails'
import { useState } from 'react'

const SpeakerCard = ({
  name,
  twitter,
  avatar,
  organization,
  position,
  bio,
  sessionTitle,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  // const closeModal = () => {
  //   setIsModalOpen(false)
  // }

  return (
    <>
      <div className="relative mx-auto mb-12 max-w-xs" onClick={openModal}>
        <div className="overflow-hidden rounded bg-blue-500 shadow-lg">
          <div className="absolute -mt-24 flex w-full justify-center">
            <div className="h-44 w-44">
              <img
                src={avatar}
                className="h-full w-full rounded-full object-cover shadow-md"
                alt={name}
              />
              <div className="absolute bottom-[-31px] left-1/2 flex h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                <img
                  className="relative h-6 w-6"
                  src={twitterLogo}
                  alt="Twitter logo"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 mt-24 h-20 px-3">
            <h1 className="text-center text-lg font-semibold text-white">
              {name}
            </h1>
            <h3 className="text-center text-base text-white">{organization}</h3>
            <p className="text-center text-sm text-white">{position}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <SpeakerDetails
            name={name}
            bio={bio}
            organization={organization}
            avatar={avatar}
            twitter={twitter}
            sessionTitle={sessionTitle}
          />
        </div>
      )}
    </>
  )
}

SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  sessionTitle: PropTypes.string.isRequired,
}

export default SpeakerCard
