import PropTypes from 'prop-types'
import { FaXTwitter } from 'react-icons/fa6'

const TwitterHandle = ({ handle }) => {
  return (
    <a
      href={`https://twitter.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      className="absolute -bottom-8 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
    >
      <FaXTwitter className="h-6 w-6" />
    </a>
  )
}

TwitterHandle.propTypes = {
  handle: PropTypes.string.isRequired,
}

export default TwitterHandle
