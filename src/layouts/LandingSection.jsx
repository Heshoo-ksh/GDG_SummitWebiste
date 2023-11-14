import michiganDevFestLogo from '@/assets/michigan-devfest-logo.png'
import detroitSkyline from '@/assets/Frame 2 - Detroit Skyline.png'
import dateandcricle from '@/assets/dateandcricle.png'

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
      <img
          className="w-full"
          src = {detroitSkyline}
          alt="Detroit Skyline"
      />
    </section>
    
  )
}

export default LandingSection
