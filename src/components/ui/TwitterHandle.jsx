import PropTypes from 'prop-types'

import TwitterIcon from '@/assets/TwitterIcon.svg'

const TwitterHandle = ({ handle }) => {
  return (
    <a
      href={`https://twitter.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      className="absolute bottom-[-31px] left-1/2 flex h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
    >
      <img className="relative h-6 w-6" src={TwitterIcon} alt="Twitter logo" />
    </a>
  )
}

TwitterHandle.propTypes = {
  handle: PropTypes.string.isRequired,
}

export default TwitterHandle
