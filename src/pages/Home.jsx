import Navbar from '@/components/ui/Navbar'
import AboutSection from '@/layouts/AboutSection'
import Footer from '@/layouts/Footer'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'

function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-16"></div>
      <LandingSection />
      <AboutSection />
      <SpeakersSection />
      <SessionsSection />
      <LocationSection />
      <Footer />
    </main>
  )
}

export default Home
