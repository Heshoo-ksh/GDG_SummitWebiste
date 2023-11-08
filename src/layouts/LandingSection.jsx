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
        className="w-5/6"
        src={michiganDevFestLogo}
        alt="Michigan DevFest Logo"
      />
      <img
        className="w-2/6"
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
