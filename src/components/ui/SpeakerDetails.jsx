
import placeholderSpeaker from '@assets/Madona Wambua.png';

function SpeakerDetails() {

    return (
        <dialog open className='relative h-[900px] w-[1600px] shrink-0 bg-[url(@/assets/speaker-details-modal.png)] bg-contain bg-center bg-no-repeat'>
            <button className='absolute right-[0px] top-[0px] mr-[18px] mt-[20px]'>
                <svg className="h-16 w-16 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </button>
            <div className='flex items-center'>
                <div className='ml-[120px] mt-[400px] shrink-0'>
                    <img className='h-[397px] w-[403px]' src={placeholderSpeaker} alt='placeholder speaker'/>
                    <article className='text-center'>
                        <h1 className='text-center text-4xl font-bold not-italic leading-10 text-black'>Madona Wambua</h1>
                        <p className='text-center text-2xl font-semibold not-italic leading-8 text-black'>Jihu Labs</p>
                    </article>
                </div>
                <div className='flex flex-col'>
                    <p className='text-justify text-4xl font-normal not-italic leading-10 text-white'>Madona is the Founder & CTO of Jibu Labs, an Author, Keynote Speaker, Senior Android Engineer, and Google Developer Expert for Android with over years of experience building Android Applications. She is also a Women Tech Maker Ambassador, a host of Tech Talks with Madona, and a developer who enjoys sharing her Android knowledge and teaching others how to make Android applications.</p>
                </div>
            </div>
            

            {/* 
            <div>
                <img className='ml-[220px] mt-[58px] h-[199px] w-[512px]' src={michiganDevFestLogo} alt='Devfest Logo'/>
                <div className='flex shrink-0 flex-col items-center justify-center'>
                    <img className='ml-[200px] h-[478px] w-[485px]' src={placeholderSpeaker} alt='placeholder speaker'/>
                    <article className='ml-[240px] flex flex-col items-center self-center'>
                        <h1 className='text-4xl font-bold not-italic leading-10'>Madona Wambua</h1>
                        <p className='text-2xl font-semibold not-italic leading-8'>Jihu Labs</p>
                    </article>
                </div>
            </div>
            <div className='flex flex-col'>
                <p>Madona is the Founder & CTO of Jibu Labs, an Author, Keynote Speaker, Senior Android Engineer, and Google Developer Expert for Android with over years of experience building Android Applications. She is also a Women Tech Maker Ambassador, a host of Tech Talks with Madona, and a developer who enjoys sharing her Android knowledge and teaching others how to make Android applications.</p>
            </div>
            */}
        </dialog>        
    );
}

export default SpeakerDetails
