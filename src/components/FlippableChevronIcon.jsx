import PropTypes from 'prop-types'

function AnimatedChevronIcon({ isFlipped, className, fill="none", strokeWidth=1.5, strokeColor="currentColor" }) {
  return (  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill} viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      className={`transition-transform ${isFlipped ? "rotate-180" : "rotate-0"} duration-300 ${className}`}>

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

AnimatedChevronIcon.propTypes = {
  isFlipped: PropTypes.bool.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string
}

export default AnimatedChevronIcon