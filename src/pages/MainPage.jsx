import AboutSection from '@/layouts/AboutSection'
import Footer from '@/layouts/Footer'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakerSection from '@/layouts/SpeakerSection'

function MainPage() {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <SpeakerSection />
      <SessionsSection />
      <LocationSection />
      <Footer />
    </div>
  )
}

export default MainPage
