import michiganDevFestLogo from '@/assets/devfest-logo-non-transp.png';
import placeholderSpeaker from '@assets/Madona Wambua.png';

function SpeakerDetails() {

    return (
        <div
        className='z-50 h-[100vh] w-full'
        >
            <div className='flex bg-[url(@/assets/DF23-SpeakerPromo-16x9-Blue.png)] bg-cover bg-no-repeat'>
                <div className='flex shrink-0 flex-col self-center'>
                    <img className='mt-[10px] h-[199px] w-[512px] shrink-0 self-center' src={michiganDevFestLogo} alt='Devfest Logo'/>
                    <div className='flex shrink-0 flex-col items-center justify-center'>
                        <img className='ml-[237px] mt-[225px] h-[478px] w-[485px]' src={placeholderSpeaker} alt='placeholder speaker'/>
                        <article className='ml-[240px] flex flex-col items-center self-center'>
                            <h1 className='text-4xl font-bold not-italic leading-10'>Madona Wambua</h1>
                            <p className='text-2xl font-semibold not-italic leading-8'>Jihu Labs</p>
                        </article>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p>Madona is the Founder & CTO of Jibu Labs, an Author, Keynote Speaker, Senior Android Engineer, and Google Developer Expert for Android with over years of experience building Android Applications. She is also a Women Tech Maker Ambassador, a host of Tech Talks with Madona, and a developer who enjoys sharing her Android knowledge and teaching others how to make Android applications.</p>
                </div>
            </div>
        </div>
    );
}

export default SpeakerDetails
