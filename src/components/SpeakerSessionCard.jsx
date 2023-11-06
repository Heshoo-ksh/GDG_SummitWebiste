import FlippableChevronIcon from './FlippableChevronIcon'
import { useState } from "react"
import PropTypes from 'prop-types'

// fix padding responsiveness
function SpeakerSessionCard({ speakerName, sessionTitle, speakerImg, sessionDesc }) {
  const [ isToggled, setIsToggled ] = useState(false)

  return (
    <section
      className="rounded-xl border bg-white shadow-lg transition duration-200 hover:shadow-xl"
    >
      <button
        onClick={() => setIsToggled(!isToggled)}
        className="flex w-full items-center justify-between p-2.5 pl-5 sm:px-10 md:pl-10 md:pr-14 xl:pr-24"
      >
        <section
          className="flex items-center text-left"
        >
          <img
            src={speakerImg}
            alt={`Headshot of ${speakerName}`}
            className="hidden h-40 rounded-full md:block"
          />
          <div
            className="md:ml-5"
          >
            <h3
              className="font-bold md:mb-2.5 md:text-xl lg:text-2xl xl:mb-5 xl:text-3xl"
            >
              {sessionTitle}
            </h3>
            <p
              className="text-gray-700"
            >
              by {speakerName}
            </p>
          </div>
        </section>
        <FlippableChevronIcon
          className="h-10 w-10 md:h-12 md:w-12 xl:h-20 xl:w-20"
          isFlipped={isToggled}
        />
      </button>
      {isToggled ? (
        <section
          className="mt-5 w-10/12 pl-12"
        >
          <p
            className="whitespace-pre-wrap border-t border-gray-700 pb-10 pt-5"
          >
            {sessionDesc}
          </p>
        </section>
      ): null}
    </section>
  )
}

SpeakerSessionCard.propTypes = {
  speakerName: PropTypes.string.isRequired,
  sessionTitle: PropTypes.string.isRequired,
  speakerImg: PropTypes.string.isRequired,
  sessionDesc: PropTypes.string.isRequired
}

export default SpeakerSessionCard