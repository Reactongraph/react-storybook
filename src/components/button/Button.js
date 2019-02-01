import React from "react"
import PropTypes from "prop-types"

const Button = (props) => {
  const { className, style, value, onClick, type, children } = props
  return (
    <button
      onClick={(e) => onClick && onClick(e, props)}
      style={style}
      type={type}
      className={className}>
      {children || value}
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
