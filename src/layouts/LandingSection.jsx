import michiganDevFestLogo from '@/assets/michigan-devfest-logo.png'
import detroitSkyline from '@/assets/Frame 2 - Detroit Skyline.png'
import redCricle from '@/assets/Circle 1.png'
import date from '@/assets/02 Dec, 2023.png'
import dateandcricle from '@/assets/dateandcricle.png'

function LandingSection() {
  return (
    <section id="landing" className="w-screen">
      <img
        className="mx-auto w-5/6"
        src={michiganDevFestLogo}
        alt="Michigan DevFest Logo"
      />

    <div className="flex justify-center items-center">
      <img
        className="w-2/6 mt-[-90px]"
        src={dateandcricle}
        alt="Date and Red Circle"
      />
    </div>

      
      <img
          className="mx-auto w-6/6"
          src = {detroitSkyline}
          alt="Detroit Skyline"
      />
      
    </section>
    
  )
}

export default LandingSection
