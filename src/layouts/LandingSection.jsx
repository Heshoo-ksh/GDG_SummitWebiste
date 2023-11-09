import michiganDevFestLogo from '@/assets/michigan-devfest-logo.png'
import dateandcricle from '@/assets/dateandcricle.png'
import DetroitSkyLinePt1 from '@assets/DetroitSkyline-pt1.png'
import DetroitSkyLinePt2 from '@assets/DetroitSkyline-pt2.png'
import DetroitSkyLinePt3 from '@assets/DetroitSkyline-pt3.png'

function LandingSection() {
  return (
    <section
      id="landing"
      className="flex w-screen flex-col items-center"
    >
      <img
        className="w-5/6 animate-jump-fade-in-one opacity-0"
        src={michiganDevFestLogo}
        alt="Michigan DevFest Logo"
      />
      {/*
         distance between this date img and the devfest logo
         needs to be shortened. this can be fixed by cropping the actual image
         externally in a photo editor to fit the logo
      */}
      <img
        className="mb-12 w-1/3 scale-0 animate-zoom-fade-in"
        src={dateandcricle}
        alt="The date for Michigan Google DevFest, December 2nd, 2023"
      />
      <div
        className='grid grid-cols-3'
      >
        <img
          className='h-full w-full scale-0 animate-grow-appear-1'
          src={DetroitSkyLinePt1}
        />
        <img
          className='h-full w-full scale-0 animate-grow-appear-2'
          src={DetroitSkyLinePt2}
        />
        <img
          className='h-full w-full scale-0 animate-grow-appear-3'
          src={DetroitSkyLinePt3}
        />
      </div>
    </section>
  )
}

export default LandingSection
