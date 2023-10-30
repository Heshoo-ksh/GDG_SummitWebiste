import Navbar from '@/components/ui/Navbar'
import AboutSection from '@/layouts/AboutSection'
import Footer from '@/layouts/Footer'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakerSection from '@/layouts/SpeakerSection'

function MainPage() {
  return (
    <main>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <SpeakerSection />
      <SessionsSection />
      <LocationSection />
      <Footer />
    </main>
  )
}

export default MainPage
