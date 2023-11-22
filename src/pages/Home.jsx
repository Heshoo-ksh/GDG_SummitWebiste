import Navbar from '@/components/Navbar'
import DevTeamSection from '@/layouts/DevTeamSection'
import FacilitatorsSection from '@/layouts/FacilitatorsSection'
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
      <SpeakersSection />
      <SessionsSection />
      <LocationSection />
      <OrganizersSection />
      <FacilitatorsSection />
      <DevTeamSection />
      <Footer />
    </main>
  )
}

export default Home
