import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

import { DIRECTION } from '@/constants/directions'
import { addHours, format, parse } from 'date-fns'

function SessionCard({
  speakers,
  speakerAvatars,
  sessionTitle,
  sessionDesc,
  sessionTime,
  sessionRoom,
}) {
  const [direction, setDirection] = useState(DIRECTION.BOTTOM)

  const toggle = () => {
    if (direction == DIRECTION.TOP) {
      setDirection(DIRECTION.BOTTOM)
    } else {
      setDirection(DIRECTION.TOP)
    }
  }

  const startTime = format(parse(sessionTime, 'HH:mm', new Date()), 'h:mm')
  const endTime = format(
    addHours(parse(sessionTime, 'HH:mm', new Date()), 1),
    'h:mm'
  )

  return (
    <div className="rounded-xl border bg-white shadow-lg transition duration-200 hover:shadow-2xl">
      <button
        onClick={() => sessionDesc && toggle()}
        className="flex w-full items-center justify-between p-3 md:px-8 lg:px-14"
      >
        <div className="flex items-center text-left">
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
          <div className="ml-5">
            <h3 className="font-bold md:text-xl lg:text-2xl xl:text-3xl">
              {sessionTitle}
            </h3>
            <p className="text-gray-700">by {speakers.join(' & ')}</p>
            <div className="mt-2.5 flex items-center space-x-4 text-sm sm:space-x-2 sm:text-base">
              <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-2">
                <p>at</p>
                <p className="whitespace-nowrap font-bold text-slate-500 sm:text-xl md:block lg:text-2xl">
                  {startTime} - {endTime}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-2">
                <p>in</p>
                <p className="whitespace-nowrap">{sessionRoom}</p>
              </div>
            </div>
          </div>
        </div>
        {sessionDesc && (
          <IoChevronDown
            className={`h-10 w-10 shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 ${
              direction === DIRECTION.TOP && '-scale-y-100'
            } transition-transform duration-100 ease-linear`}
          />
        )}
      </button>
      {direction == DIRECTION.TOP ? (
        <div className="mt-5 w-10/12 pl-12">
          <p className="whitespace-pre-wrap border-t border-gray-700 pb-10 pt-5 text-justify">
            {sessionDesc}
          </p>
        </div>
      ) : null}
    </div>
  )
}

SessionCard.propTypes = {
  speakers: PropTypes.arrayOf(PropTypes.string).isRequired,
  speakerAvatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  sessionTitle: PropTypes.string.isRequired,
  sessionDesc: PropTypes.string.isRequired,
  sessionTime: PropTypes.string.isRequired,
  sessionRoom: PropTypes.string.isRequired,
}

export default SessionCard
