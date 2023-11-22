import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

import { DIRECTION } from '@/constants/directions'

function SessionCard({ speakers, speakerAvatars, sessionTitle, sessionDesc }) {
  const [direction, setDirection] = useState(DIRECTION.BOTTOM)

  const toggle = () => {
    if (direction == DIRECTION.TOP) {
      setDirection(DIRECTION.BOTTOM)
    } else {
      setDirection(DIRECTION.TOP)
    }
  }

  return (
    <section className="rounded-xl border bg-white shadow-lg transition duration-200 hover:shadow-2xl">
      <button
        onClick={() => sessionDesc && toggle()}
        className="flex w-full items-center justify-between p-2.5 pl-5 sm:px-10 md:pl-10 md:pr-14 xl:pr-24"
      >
        <section className="flex items-center text-left">
          <div className="hidden shrink-0 overflow-hidden rounded-full md:flex">
            {speakerAvatars.map((avatar, index) => (
              <img
                key={index}
                src={
                  avatar == ''
                    ? `https://ui-avatars.com/api/?name=${speakers[index]}&background=random`
                    : avatar
                }
                alt={`Headshot of ${speakers[index]}`}
                className="h-40 w-40 object-cover"
              />
            ))}
          </div>
          <div className="md:ml-5">
            <h3 className="font-bold md:mb-2.5 md:text-xl lg:text-2xl xl:mb-5 xl:text-3xl">
              {sessionTitle}
            </h3>
            <p className="text-gray-700">by {speakers.join(' & ')}</p>
          </div>
        </section>
        {sessionDesc && (
          <IoChevronDown
            className={`h-20 w-20 shrink-0 ${
              direction === DIRECTION.TOP && '-scale-y-100'
            } transition-transform duration-100 ease-linear`}
          />
        )}
      </button>
      {direction == DIRECTION.TOP ? (
        <section className="mt-5 w-10/12 pl-12">
          <p className="whitespace-pre-wrap border-t border-gray-700 pb-10 pt-5 text-justify">
            {sessionDesc}
          </p>
        </section>
      ) : null}
    </section>
  )
}

SessionCard.propTypes = {
  speakers: PropTypes.arrayOf(PropTypes.string).isRequired,
  speakerAvatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  sessionTitle: PropTypes.string.isRequired,
  sessionDesc: PropTypes.string.isRequired,
}

export default SessionCard
