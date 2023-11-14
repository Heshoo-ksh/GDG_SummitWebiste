import Navbar from '@/components/ui/Navbar'
import AboutSection from '@/layouts/AboutSection'
import Footer from '@/layouts/Footer'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
// import SpeakerDetails from '@/components/ui/SpeakerDetails'
// import placeholderSpeaker from '@assets/Madona Wambua.png'

function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className="h-16"></div>
        <LandingSection />
        <AboutSection />
        <SpeakersSection />
        {/* <SpeakerDetails
          speakerName="Madona Wambua"
          speakerBio="Madona is the Founder & CTO of Jibu Labs, an Author, Keynote Speaker, Senior Android Engineer, and Google Developer Expert for Android with over years of experience building Android Applications. She is also a Women Tech Maker Ambassador, a host of Tech Talks with Madona, and a developer who enjoys sharing her Android knowledge and teaching others how to make Android applications."
          companyName="Jihu Labs"
          image={placeholderSpeaker}
          twitterUrl="https://twitter.com/home"
          sessionName="Simplified App Navigation with Android Jetpack Compose Navigation"
        /> */}
        <SessionsSection />
        <LocationSection />
        <Footer />
      </main>
    </>
  )
}

export default Home
