import React from "react"
import { Doughnut } from "react-chartjs-2"
import PropTypes from "prop-types"

class DoughnutGraph extends React.Component {
	render() {
		const { options, data } = this.props
		return (
			<Doughnut
				options={options}
				data={data}
			/>
		)
	}
}

DoughnutGraph.propTypes = {
	options: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired
}

export default DoughnutGraph