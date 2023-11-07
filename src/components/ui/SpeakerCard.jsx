import PropTypes from 'prop-types';
import twitterLogo from '@/assets/Twitter_Logo.png'; // Replace with the actual path to your Twitter logo

const SpeakerCard = ({ name, twitterHandle, imageUrl, companyName }) => {
  return (
    <div className="relative max-w-xs rounded-lg bg-blue-500 shadow-lg">
      <div className="flex justify-center">
        <div className="relative">
          {/* Image circle */}
          <img
            className="h-24 w-24 rounded-full border-4 border-white object-cover"
            src={imageUrl}
            alt={name}
            style={{ marginTop: '-3rem' }} // Adjust this value as needed to lift the image above the rectangle
          />
          {/* Twitter Icon - Conditionally rendered */}
          {twitterHandle && (
            <div className="absolute bottom-[-16px] left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
              <img className="h-5 w-5" src={twitterLogo} alt="Twitter" />
            </div>
          )}
        </div>
      </div>
      {/* Rectangle for name and company */}
      <div className="px-4 pb-4 pt-10"> {/* Adjust padding-top to match the negative margin-top of the image */}
        <h3 className="text-center text-xl font-semibold text-white">{name}</h3>
        <p className="mt-1 text-center text-sm text-gray-200">{companyName}</p>
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
