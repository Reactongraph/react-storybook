export const data = {
	datasets: [
		{
			label: "Africa",
			backgroundColor: ["#3e95cd"],
			data: [2478]
		},
		{
			label: "Asia",
			backgroundColor: ["#8e5ea2"],
			data: [3267]
		},
		{
			label: "Europe",
			backgroundColor: ["#3cba9f"],
			data: [734]
		},
		{
			label: "Latin America",
			backgroundColor: ["#e8c3b9"],
			data: [784]
		},
		{
			label: "North America",
			backgroundColor: ["#c45850"],
			data: [433]
		}
	]
}

export const options = {
	title: {
		display: true,
		text: 'Bar Graph'
	},
	legend: {
		display: true,
		position: "bottom"
	},
	responsive: true,
	maintainAspectRatio: true
}