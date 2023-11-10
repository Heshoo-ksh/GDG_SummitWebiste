import SpeakerCard from '@/components/ui/SpeakerCard'; 
import speakerImage from '@/assets/speakerImage.png'

const speakersData = [
  {
    id: 1,
    name: 'Erica Olson',
    twitterHandle: 'LittleOleson',
    imageUrl: speakerImage, // Make sure this variable points to an image URL or imported image file
    companyName: 'Little Caesars',
  },
  {
    id: 2,
    name: 'Alex Johnson',
    twitterHandle: 'AJ_Tech',
    imageUrl: speakerImage,
    companyName: 'Tech Innovations Inc.',
  },
  {
    id: 3,
    name: 'Samira Khan',
    twitterHandle: '',
    imageUrl: speakerImage,
    companyName: 'Global Coders United',
  },

  // ... continue to add more speaker objects as needed
];


function SpeakersSection() {
  return (
    <section
      id="speakers"
      className="container mx-auto px-4 py-12"
      >
      <legend className="!mb-[60px]">Speakers Section</legend>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {speakersData.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            name={speaker.name}
            twitterHandle={speaker.twitterHandle}
            imageUrl={speaker.imageUrl}
            companyName={speaker.companyName}
          />
        ))}
      </div>
    </section>
  );
}

export default SpeakersSection;
