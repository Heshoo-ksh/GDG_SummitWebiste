//import detroitSkyline from '@/assets/images/Frame 2 - Detroit Skyline.png'
import { FaTicketAlt } from 'react-icons/fa'

import date from '@/assets/images/date.png'
import BHMSummitLogo from '@/assets/images/BHMSummitLogo.png'

function LandingSection() {
  return (
    <section id="landing" className="mt-16">
      <div className="flex flex-wrap bg-black">
        <div className="w-full sm:w-1/2">
          <img
            className="w-full"
            src={BHMSummitLogo}
            alt="Black History Innovation Summit Logo"
          />
        </div>

        <div className="flex w-full flex-col justify-between bg-primary-400 sm:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-10">
            <img className="w-3/4" src={date} alt="Date and Red Circle" />
            <h1 className="text-justify text-xl font-semibold lg:text-base xl:text-3xl">
              Discover the Future of Tech Innovation in Detroit
            </h1>
            <p className="text-justify text-sm font-normal lg:text-base xl:text-lg">
              On Saturday, February 15, 2025, Detroit will become the epicenter
              of technology and innovation as local professionals, founders, and
              early-career professionals gather for a day of learning, building,
              and connecting.
              <br />
              <br />
              In partnership with Google Developer Group Detroit, Google, Black
              Tech Saturdays, Clixie AI, Compass, NSBE Detroit, DTE and Think
              Technologies, this large-scale in-person event at Michigan Central
              Station and New Lab will spotlight the latest advancements in
              technology and the transformative impact of AI on industries.
              <br />
              <br />
              Attendees will engage in hands-on workshops, product demos, and
              panel discussions with industry leaders, culminating in a lively
              social hour designed for networking and collaboration.
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
