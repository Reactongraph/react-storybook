import React from "react"
import { Line } from "react-chartjs-2"
import PropTypes from "prop-types"

class LineGraph extends React.Component {
	render() {
		const { options, data } = this.props
		return (
				<Line
					options={options}
					data={data}
				/>
		)
	}
}

LineGraph.propTypes = {
	options: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired
}

export default LineGraph