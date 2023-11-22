import PropTypes from 'prop-types'

import TwitterHandle from '@/components/ui/TwitterHandle'

const GenericCard = ({
  name,
  twitter,
  avatar,
  organization,
  position,
  onOpen,
}) => {
  return (
    <div
      className="relative mx-auto mb-16 w-full max-w-xs bg-primary-500 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
      onClick={onOpen}
    >
      <div className="overflow-hidden rounded bg-primary-200 shadow-2xl hover:bg-primary-300">
        <div className="absolute -mt-24 flex w-full justify-center">
          <div className="h-48 w-48">
            <img
              src={avatar}
              className="h-full w-full rounded-full object-cover shadow-md"
              alt={name}
            />
            {twitter && <TwitterHandle handle={twitter} />}
          </div>
        </div>
        <div className="mb-4 mt-28 h-20 px-2">
          <h1 className="text-center text-lg font-semibold text-sky-900">
            {name}
          </h1>
          <h3 className="text-center text-base text-sky-900">{organization}</h3>
          <p className="text-center text-sm text-sky-900">{position}</p>
        </div>
      </div>
    </div>
  )
}

GenericCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  sessionTitle: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default GenericCard
