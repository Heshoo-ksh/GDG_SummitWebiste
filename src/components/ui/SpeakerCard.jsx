import PropTypes from 'prop-types'
import SpeakerDetails from '@/components/ui/SpeakerDetails'
import { useState } from 'react'
import TwitterHandle from '../TwitterHandle'

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
      <div
        className="relative mx-auto mb-16 max-w-xs bg-blue-500 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
        onClick={openModal}
      >
        <div className="overflow-hidden rounded bg-blue-500 shadow-2xl">
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
