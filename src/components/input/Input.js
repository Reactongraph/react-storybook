import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
	const { className, style, id, type, placeholder, name, onChange, onKeyPress } = props;
	return (
		<input
			style={style}
			id={id}
			name={name}
			className={className}
			type={type}
			placeholder={placeholder}
			onKeyPress={onKeyPress}
			onChange={(e) => onChange && onChange(e, props)} />
	)
}

Input.defaultProps = {
	type: "text"
}

Input.propTypes = {
	style: PropTypes.object,
	className: PropTypes.string,
	id: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	onKeyPress: PropTypes.func,
	onChange: PropTypes.func
};

export default Input
