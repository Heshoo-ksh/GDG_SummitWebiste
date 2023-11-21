import { FaLinkedinIn } from 'react-icons/fa'
import PropTypes from 'prop-types'

const LinkedInHandle = ({ handle }) => (
  <a
    href={handle}
    target="_blank"
    rel="noreferrer"
    className="absolute left-1/2 z-10 flex h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600"
  >
    <FaLinkedinIn className=" text-white" />
  </a>
)

LinkedInHandle.propTypes = {
  handle: PropTypes.string.isRequired,
}

export default LinkedInHandle
