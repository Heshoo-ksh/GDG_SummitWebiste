import Navbar from '@/components/Navbar'
import DevTeamSection from '@/layouts/DevTeamSection'
import Footer from '@/layouts/Footer'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
//import OrganizersSection from '@/layouts/OrganizersSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import SponsorsSection from '@/layouts/SponsorsSection'

function Home() {
  return (
    <main>
      <Navbar />
      <LandingSection />
      <LocationSection />
      <SessionsSection />
      <SpeakersSection />
      <SponsorsSection />
      {/* <OrganizersSection />*/}
      <DevTeamSection />
      <Footer />
    </main>
  )
}

export default Home
