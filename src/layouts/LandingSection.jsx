import michiganDevFestLogo from '@/assets/michigan-devfest-logo.png'

function LandingSection() {
  return (
    <section id="landing" className="w-screen">
      <img
        className="mx-auto w-5/6"
        src={michiganDevFestLogo}
        alt="Michigan DevFest Logo"
      />
    </section>
  )
}

export default LandingSection
