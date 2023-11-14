import SpeakerCard from '@/components/ui/SpeakerCard'

const speakersData = [
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    twitterHandle: 'johndoe',
    imageUrl: 'https://via.placeholder.com/150',
  },
]

function SpeakersSection() {
  return (
    <section id="speakers" className="flex items-center justify-center pb-28">
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {speakersData.map((speaker, index) => (
          <div key={index}>
            <SpeakerCard
              name={speaker.name}
              twitterHandle={speaker.twitterHandle}
              imageUrl={speaker.imageUrl}
              companyName={speaker.companyName}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SpeakersSection
