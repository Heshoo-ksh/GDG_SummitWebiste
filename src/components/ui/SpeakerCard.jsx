import PropTypes from 'prop-types';
import twitterLogo from '@/assets/Twitter_Logo.png'; // Replace with the actual path to your Twitter logo

const SpeakerCard = ({ name, twitterHandle, imageUrl, companyName }) => {
  return (
    <div className="relative h-[246.52px] w-[329.30px] rounded-[3px] bg-blue-500 shadow">
      {/* Image circle, positioned to overlap the top of the rectangle */}
      <div className="mt-[-137.5px] flex justify-center">
        <div className="relative">
          <img
            className="h-[275px] w-[273px] rounded-full object-cover"
            src={imageUrl}
            alt={name}
          />
          {/* Twitter Icon - Conditionally rendered */}
          {twitterHandle && (
  <div className="absolute bottom-[-31px] left-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
    <img className="h-10 w-10" src={twitterLogo} alt="Twitter logo" />
  </div>
)}

        </div>
      </div>

      {/* Rectangle for name and company */}
      <div className="absolute bottom-0 w-full px-4 pb-10 ">
        <div className="text-center font-['Open_Sans'] text-2xl font-normal text-white">{name}</div>
        <div className="mt-[6px] text-center font-['Open_Sans'] text-sm font-normal text-white">{companyName}</div>
      </div>
    </div>
  );
};



SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};

export default SpeakerCard;
