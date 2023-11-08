import michiganDevFestLogo from '@/assets/michigan-devfest-logo.png'
import detroitSkyline from '@/assets/Frame 2 - Detroit Skyline.png'
import dateandcricle from '@/assets/dateandcricle.png'

function LandingSection() {
  return (
    <section
      id="landing"
      className="w-screen"
    >
      <img
        className="mx-auto w-5/6"
        src={michiganDevFestLogo}
        alt="Michigan DevFest Logo"
      />

    <div
      className="flex items-center justify-center"
    >
      <img
        className="mt-[-90px] w-2/6"
        src={dateandcricle}
        alt="The date for Michigan Google DevFest, December 2nd, 2023"
      />
    </div>

      
      <img
          className="w-6/6 mx-auto"
          src = {detroitSkyline}
          alt="Detroit Skyline"
      />
      
    </section>
    
  )
}

export default LandingSection
