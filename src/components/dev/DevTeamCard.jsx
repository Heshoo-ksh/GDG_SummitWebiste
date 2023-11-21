import LinkedInHandle from '@/components/ui/LinkedInHandle'
import PropTypes from 'prop-types'

const DevTeamCard = ({
  name,
  avatar,
  linkedin,
  organization,
  position,
  university,
}) => {
  return (
    <div className="group relative mb-10 ml-2 transform-gpu overflow-hidden grayscale transition-transform hover:scale-105 hover:cursor-pointer hover:filter-none">
      <img src={avatar} className="h-56 w-full object-cover object-center " />
      <LinkedInHandle handle={linkedin} />
      <div className="invisible h-24 translate-y-8 bg-primary-300 pt-5 text-center text-sm text-sky-900 transition ease-in-out group-hover:visible group-hover:translate-y-0">
        <h1 className="text-base font-semibold text-sky-900">{name}</h1>
        <div className="px-2">
          <h3 className="text-sm text-sky-900">{organization || university}</h3>
          <p className="text-sm text-sky-900">{position}</p>
        </div>
      </div>
    </div>
  )
}

DevTeamCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
}

export default DevTeamCard
