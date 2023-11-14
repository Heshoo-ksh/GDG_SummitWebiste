import { useState } from 'react'

import Mic from '@/assets/Mic.svg'
import TwitterHandle from '@/components/TwitterHandle'

/* eslint-disable react/prop-types */

function SessionContent(props) {
  if (props.isSessionOpen) {
    return (
      <>
        <img className="ml-[38px]" src={Mic} />
        {!props.isHiddenText ? (
          <div className="w-[0] min-w-full overflow-hidden text-left">
            <p className="text-2xl font-normal not-italic leading-8 text-white">
              Talking About
            </p>
            <p className="w-[80%] text-3xl font-bold not-italic leading-10 text-white">
              {props.sessionName}
            </p>
          </div>
        ) : null}
      </>
    )
  }

  return (
    <>
      <img className="ml-[38px]" src={Mic} />
    </>
  )
}

function SpeakerDetails(props) {
  const [isSessionOpen, setIsSessionOpen] = useState(false)
  const [isHiddenText, setIsHiddenText] = useState(true)

  const handleClick = () => {
    setIsSessionOpen(!isSessionOpen)
    setIsHiddenText(true)
  }

  setTimeout(() => setIsHiddenText(false), 100)

  return (
    <dialog
      open
      className="relative inset-0 h-[900px] w-[1600px] shrink-0 bg-[url(@/assets/speaker-details-modal.png)] bg-contain bg-center bg-no-repeat"
    >
      <button className="absolute right-[0px] top-[0px] mr-[18px] mt-[20px]">
        <svg
          className="h-16 w-16 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div className="flex items-center">
        <button className="ml-[25px] mt-[200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="102"
            viewBox="0 0 65 123"
            fill="none"
          >
            <path
              d="M63.5813 114.549C64.4903 115.481 65 116.739 65 118.049C65 119.359 64.4903 120.617 63.5813 121.549C63.1343 122.009 62.6015 122.374 62.0138 122.623C61.4262 122.872 60.7955 123 60.1584 123C59.5214 123 58.8907 122.872 58.303 122.623C57.7154 122.374 57.1826 122.009 56.7356 121.549L1.41871 65.0004C0.509666 64.0677 0 62.8102 0 61.5C0 60.1898 0.509666 58.9323 1.41871 57.9997L56.7356 1.45064C57.1826 0.991204 57.7154 0.626344 58.303 0.377299C58.8907 0.128255 59.5214 0 60.1584 0C60.7955 0 61.4262 0.128255 62.0138 0.377299C62.6015 0.626344 63.1343 0.991204 63.5813 1.45064C64.4903 2.38334 65 3.64082 65 4.95099C65 6.26116 64.4903 7.51865 63.5813 8.45134L13.132 61.5036L63.5813 114.549Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="ml-[120px] mt-[400px] shrink-0">
          <div className="relative">
            <img
              className="h-[400px] w-[403px]"
              src={props.image}
              alt="speaker image"
            />
            {props.twitterUrl && (
              <div className="absolute bottom-[-30px] left-2/4 mx-auto my-0 -translate-x-2/4 -translate-y-2/4">
                <TwitterHandle url={props.twitterUrl} />
              </div>
            )}
          </div>
          <div className="text-center">
            <h1 className="text-center text-4xl font-bold not-italic leading-10 text-black">
              {props.speakerName}
            </h1>
            <p className="text-center text-2xl font-semibold not-italic leading-8 text-black">
              {props.companyName}
            </p>
          </div>
        </div>
        <div className="ml-[189px] mr-[25px] mt-[320px] flex flex-col">
          <p className="text-justify text-4xl font-normal not-italic leading-10 text-white">
            {props.speakerBio}
          </p>

          <button
            onClick={handleClick}
            className={
              'mt-[10px] flex h-36 items-center transition-[width] duration-[40ms] ease-in ' +
              (isSessionOpen ? 'w-[100%]' : 'w-36') +
              ' shrink-0 rounded-full bg-blue-500'
            }
          >
            <SessionContent
              isSessionOpen={isSessionOpen}
              isHiddenText={isHiddenText}
              sessionName={props.sessionName}
            />
          </button>
        </div>
        <button className="mr-[25px] mt-[180px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="102"
            viewBox="0 0 65 123"
            fill="none"
          >
            <path
              d="M1.41871 8.45134C0.509668 7.51865 0 6.26117 0 4.951C0 3.64082 0.509668 2.38334 1.41871 1.45065C1.86572 0.991203 2.39855 0.626343 2.98618 0.377296C3.57381 0.128258 4.20451 0 4.84157 0C5.47864 0 6.10934 0.128258 6.69697 0.377296C7.2846 0.626343 7.81743 0.991203 8.26444 1.45065L63.5813 57.9996C64.4903 58.9323 65 60.1898 65 61.5C65 62.8102 64.4903 64.0677 63.5813 65.0003L8.26444 121.549C7.81743 122.009 7.2846 122.374 6.69697 122.623C6.10934 122.872 5.47864 123 4.84157 123C4.20451 123 3.57381 122.872 2.98618 122.623C2.39855 122.374 1.86572 122.009 1.41871 121.549C0.509668 120.617 0 119.359 0 118.049C0 116.739 0.509668 115.481 1.41871 114.549L51.868 61.4964L1.41871 8.45134Z"
              fill="#4285F4"
            />
          </svg>
        </button>
      </div>
    </dialog>
  )
}

export default SpeakerDetails
