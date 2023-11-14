import PropTypes from 'prop-types'
import twitterLogo from '@/assets/Twitter_Logo.png'

const SpeakerCard = ({ name, twitter, avatar, organization }) => {
  return (
    <div className="relative !flex h-[246.52px] w-[329.30px] flex-col gap-2 rounded-[3px] bg-blue-500 shadow">
      <div className="mt-[-137.5px] flex justify-center">
        <div className="relative">
          <img
            className="h-[273px] w-[273px] rounded-full object-cover"
            src={
              avatar == ''
                ? `https://ui-avatars.com/api/?name=${name}&background=random`
                : avatar
            }
            alt={name}
          />
          {twitter && (
            <div className="absolute bottom-[-31px] left-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
              <img
                className="relative h-10 w-10"
                src={twitterLogo}
                alt="Twitter logo"
              />
            </div>
          )}
        </div>
      </div>

      {/* Rectangle for name and company */}
      <div className="flex flex-col gap-[10px]">
        <div className="flex h-[32px] !items-center justify-center text-center text-2xl font-normal leading-loose text-white">
          {name}
        </div>
        <div className="flex h-[22px] items-center justify-center text-center text-sm font-normal leading-tight text-white">
          {organization}
        </div>
      </div>
    </div>
  )
}

SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
}

export default SpeakerCard
