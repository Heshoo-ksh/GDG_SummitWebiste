import detroitSkyline from '@/assets/Frame 2 - Detroit Skyline.png'
import dateandcricle from '@/assets/dateandcricle.png'
import michiganDevFestLogoDark from '@/assets/devfest_logo_dark.png'

function LandingSection() {
  return (
    <section id="landing">
      <img
        className="mx-auto w-2/5"
        src={michiganDevFestLogoDark}
        alt="Michigan DevFest Logo"
      />

      <div className="flex justify-center">
        <img
          className="mt-[-90px] w-2/6"
          src={dateandcricle}
          alt="Date and Red Circle"
        />
      </div>
      <img
        className="mx-auto w-full"
        src={detroitSkyline}
        alt="Detroit Skyline"
      />
    </section>
  )
}

export default LandingSection
