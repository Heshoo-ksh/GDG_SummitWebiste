import React from 'react'
import PropTypes from 'prop-types'

function StylableComponentList({
  childComponentData,
  childComponent,
  className,
}) {
  return (
    <ul className={className}>
      {childComponentData.map((item) => (
        <li key={item.id}>{React.createElement(childComponent, item)}</li>
      ))}
    </ul>
  )
}

StylableComponentList.propTypes = {
  childComponentData: PropTypes.array.isRequired,
  childComponent: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default StylableComponentList
