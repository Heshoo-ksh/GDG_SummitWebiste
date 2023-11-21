import detroitSkyline from '@/assets/Frame 2 - Detroit Skyline.png'
import { FaTicketAlt } from 'react-icons/fa'

import date from '@/assets/date.png'
import michiganDevFestLogoDark from '@/assets/devfest_logo_dark.png'

function LandingSection() {
  return (
    <section id="landing" className="mt-16">
      <div className="flex flex-wrap bg-black">
        <div className="w-full p-12 sm:w-1/2">
          <img
            className="w-full"
            src={michiganDevFestLogoDark}
            alt="Michigan DevFest Logo"
          />
        </div>

        <div className="flex w-full flex-col justify-between bg-primary-400 sm:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-10">
            <img className="w-1/2" src={date} alt="Date and Red Circle" />

            <p className="text-justify text-sm font-normal lg:text-base xl:text-lg">
              The Detroit and Ann Arbor Google Developer Groups (GDG) are
              teaming up once again to bring you the 9th Michigan DevFest on
              December 2, 2023, at the Little Caesar&apos;s Global. With our 9th
              DevFest, we aim to put together a great day of networking and
              knowledge sharing for all involved.
            </p>
            <a
              href="https://www.eventbrite.com/e/michigan-devfest-2023-tickets-717544122787?aff=oddtdtcreator"
              target="_blank"
              className="flex items-center rounded bg-sky-900 px-8 py-5 text-primary-400 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
              rel="noreferrer"
            >
              {' '}
              <FaTicketAlt className="mr-3" />
              GET TICKETS
            </a>
          </div>
          <div>
            <img
              className="mx-auto w-full opacity-5"
              src={detroitSkyline}
              alt="Detroit Skyline"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
