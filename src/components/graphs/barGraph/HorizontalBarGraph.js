import React from "react"
import { HorizontalBar } from "react-chartjs-2"
import PropTypes from "prop-types"

class HorizontalBarGraph extends React.Component {
	render() {
		const { options, data } = this.props
		return (
			<HorizontalBar
				options={options}
				data={data}
			/>
		)
	}
}

HorizontalBarGraph.propTypes = {
	options: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired
}

export default HorizontalBarGraph