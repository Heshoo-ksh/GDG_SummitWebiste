import SpeakerDetails from '@/components/ui/SpeakerDetails'
import placeholderSpeaker from '@/assets/Madona Wambua.png'

function SpeakerDetailSection() {
  return (
    <section
      id="speaker-details"
      className="flex h-screen items-center justify-center"
    >
      <SpeakerDetails
        speakerName="Madona Wambua"
        speakerBio="Madona is the Founder & CTO of Jibu Labs, an Author, Keynote Speaker, Senior Android Engineer, and Google Developer Expert for Android with over years of experience building Android Applications. She is also a Women Tech Maker Ambassador, a host of Tech Talks with Madona, and a developer who enjoys sharing her Android knowledge and teaching others how to make Android applications."
        companyName="Jihu Labs"
        image={placeholderSpeaker}
        twitterUrl="https://twitter.com/home"
        sessionName="Simplified App Navigation with Android Jetpack Compose Navigation"
      />
    </section>
  )
}

export default SpeakerDetailSection
