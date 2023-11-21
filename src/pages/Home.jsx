import Navbar from '@/components/Navbar'
import AboutSection from '@/layouts/AboutSection'
import Footer from '@/layouts/Footer'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import OrganizersSection from '@/layouts/OrganizersSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'

function Home() {
  return (
    <main>
      <Navbar />
      <LandingSection />
      {/* <AboutSection /> */}
      <SpeakersSection />
      <SessionsSection />
      <OrganizersSection />
      <LocationSection />
      <Footer />
    </main>
  )
}

export default Home
