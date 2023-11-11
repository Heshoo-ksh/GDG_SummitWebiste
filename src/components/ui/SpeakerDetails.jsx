
import placeholderSpeaker from '@assets/Madona Wambua.png';

function SpeakerDetails() {
    // Multiply by factor of 0.83 for pixels in css

    return (
        <dialog open className='relative h-[900px] w-[1600px] shrink-0 bg-[url(@/assets/speaker-details-modal.png)] bg-contain bg-center bg-no-repeat'>
            <button className='absolute right-[0px] top-[0px] mr-[18px] mt-[20px]'>
                <svg className="h-16 w-16 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </button>
            <div className='flex items-center'>
                <button className='ml-[15px] mt-[200px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="123" viewBox="0 0 65 123" fill="none">
                        <path d="M63.5813 114.549C64.4903 115.481 65 116.739 65 118.049C65 119.359 64.4903 120.617 63.5813 121.549C63.1343 122.009 62.6015 122.374 62.0138 122.623C61.4262 122.872 60.7955 123 60.1584 123C59.5214 123 58.8907 122.872 58.303 122.623C57.7154 122.374 57.1826 122.009 56.7356 121.549L1.41871 65.0004C0.509666 64.0677 0 62.8102 0 61.5C0 60.1898 0.509666 58.9323 1.41871 57.9997L56.7356 1.45064C57.1826 0.991204 57.7154 0.626344 58.303 0.377299C58.8907 0.128255 59.5214 0 60.1584 0C60.7955 0 61.4262 0.128255 62.0138 0.377299C62.6015 0.626344 63.1343 0.991204 63.5813 1.45064C64.4903 2.38334 65 3.64082 65 4.95099C65 6.26116 64.4903 7.51865 63.5813 8.45134L13.132 61.5036L63.5813 114.549Z" fill="black"/>
                    </svg>
                </button>
                <div className='ml-[120px] mt-[400px] shrink-0'>
                    <img className='h-[400px] w-[403px]' src={placeholderSpeaker} alt='placeholder speaker'/>
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
