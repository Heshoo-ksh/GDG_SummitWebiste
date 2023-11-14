import React from 'react'
import PropTypes from 'prop-types'

function StylableCustomList({ listItems, renderItem, className }) {
  return (
    <ul
      className={className}
    >
      {listItems.map((item) => (
        <li
          key={item.id}
        >
          {React.createElement(renderItem, item)}
        </li>
      ))}
    </ul>
  )
}

StylableCustomList.propTypes = {
  listItems: PropTypes.array.isRequired,
  renderItem: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default StylableCustomList