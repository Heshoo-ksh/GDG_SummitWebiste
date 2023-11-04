import {  useState } from "react"
import PropTypes from 'prop-types'

/*

[Card Usage]
Desc prop must be passed using `` in order for the <pre> tag to work

Ex. this formatting gives the same as the designs

`We all know that providing a good search experience for website visitors is hard. Everyone expects it to “just” work like Bing or Amazon. Maybe there is a better way, maybe we fix this with a little help from some AI or even our new friend Chat GPT.
          
Join the session to see how you can leverage Cognitive Services with Azure Cognitive Search in your apps. With the newly minted semantic search and OpenAI abilities this technology can provide results that are semantically closer to the intent of original query.

You can expect to walk away knowing how to generate your own power search experience that leverages the power of AI to solve your search woes.`

*/

function SpeakerSessionCard({ name, title, speakerImg, desc }) {
  const [toggled, toggleDropdown] = useState(false)

  return (
    <section
      className="w-5/6 rounded-xl border shadow-lg transition duration-200 hover:shadow-xl"
    >
      <button
        onClick={() => toggleDropdown(!toggled)}
        className="flex w-full items-center justify-between p-2.5"
      >
        <section
          className="flex items-center text-left"
        >
          <img
            src={speakerImg}
            alt={`Headshot of ${name}`}
            className="hidden h-40 rounded-full md:block"
          />
          <div
            className="md:ml-5"
          >
            <h3
              className="font-bold md:mb-2.5 md:text-xl lg:text-2xl xl:mb-5 xl:text-3xl"
            >
              {title}
            </h3>
            <p
              className="text-gray-700"
            >
              by {name}
            </p>
          </div>
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-10 w-10 transition md:h-12 md:w-12 xl:h-20 xl:w-20 ${toggled ? "rotate-180" : "rotate-0"} duration-300`}>
          
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {toggled ? (
        <section
          className="mt-5 w-10/12 pl-12"
        >
          <p
            className="whitespace-pre-wrap border-t border-gray-700 pb-10 pt-5"
          >
            {desc}
          </p>
        </section>
      ): null}
    </section>
  )
}

SpeakerSessionCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  speakerImg: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default SpeakerSessionCard