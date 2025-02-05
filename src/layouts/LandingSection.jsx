//import detroitSkyline from '@/assets/images/Frame 2 - Detroit Skyline.png'
import { FaTicketAlt } from 'react-icons/fa'

import date from '@/assets/images/date.png'
//import michiganDevFestLogoDark from '@/assets/images/devfest_logo_dark.png'
import DevFestLogo from '@/assets/images/DevFestLogo.png'

function LandingSection() {
  return (
    <section id="landing" className="mt-16">
      <div className="flex flex-wrap bg-black">
        <div className="w-full p-12 sm:w-1/2">
          <img
            className="w-full"
            src={DevFestLogo}
            alt="Michigan DevFest Logo"
          />
        </div>

        <div className="flex w-full flex-col justify-between bg-primary-400 sm:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-10">
            <img className="w-3/4" src={date} alt="Date and Red Circle" />

            <p className="text-justify text-sm font-normal lg:text-base xl:text-lg">
              GDG Detroit in partnership with Black Tech Saturdays, COMPASS, NSBE Detroit, Clixie AI, Think
              Technologies, DTE Energy, and Grand Circus is hosting a day of
              learning, gathering, and celebrating Detroit&apos;s tech
              ecosystem. This large-scale, in-person summit at Michigan Central
              Station will offer a full day on the latest advancements in tech
              and transformative impact of AI on industries. Content will be
              provided by local tech and business leaders, Google, Google
              Developer Experts, including a Build with AI workshop.
            </p>
            <a
              href="https://events.eventnoire.com/e/black-tech-saturdays-3?utm_source=affiliate&utm_name=GDG-Link&utm_campaign=GDG-Link&utm_id=679934b71770480eb6a500120a1e60ce"
              target="_blank"
              className="flex items-center rounded bg-sky-900 px-8 py-5 text-primary-400 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
              rel="noreferrer"
            >
              {' '}
              <FaTicketAlt className="mr-3" />
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
