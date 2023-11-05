import michiganDevFestLogo from '@/assets/devfest-logo-non-transp.png';
import placeholderSpeaker from '@assets/Madona Wambua.png';

function SpeakerDetails() {

    return (
        <div
        className={'h-screen w-screen bg-[url(@/assets/DF23-SpeakerPromo-16x9-Blue.png)] bg-cover bg-center'}
        >
            <div className='flex flex-col'>
                <img className='ml-[60px] h-[199px] w-[512px]' src={michiganDevFestLogo} alt='Devfest Logo'/>
                <div>
                    <img className='ml-[235px] mt-[207px] h-[478px] w-[485px]' src={placeholderSpeaker} alt='placeholder speaker'/>
                    <h1 className='font-sans'>Madona Wambua</h1>
                    <p className='font-["sans-medium/2x1"]'>Jihu Labs</p>
                </div>
            </div>
        </div>
    );
}

export default SpeakerDetails
