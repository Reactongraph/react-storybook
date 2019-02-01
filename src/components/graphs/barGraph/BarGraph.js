import React from "react"
import { Bar } from "react-chartjs-2"
import PropTypes from "prop-types"

class BarGraph extends React.Component {
	render() {
		const { options, data } = this.props
		return (
			<Bar
				options={options}
				data={data}
			/>
		)
	}
}

BarGraph.propTypes = {
	options: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired
}

export default BarGraph