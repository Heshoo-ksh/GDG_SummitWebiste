import Navbar from '@/components/Navbar'
import DevTeamSection from '@/layouts/DevTeamSection'
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
      <DevTeamSection />
      <Footer />
    </main>
  )
}

export default Home
