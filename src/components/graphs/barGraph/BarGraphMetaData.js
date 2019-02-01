export const data = {
	datasets: [
		{
			label: "Label1",
			backgroundColor: ["#3e95cd"],
			data: [2500]
		},
		{
			label: "Label2",
			backgroundColor: ["#8e5ea2"],
			data: [3003]
		},
		{
			label: "Label3",
			backgroundColor: ["#3cba9f"],
			data: [700]
		},
		{
			label: "Label4",
			backgroundColor: ["#e8c3b9"],
			data: [1100]
		},
		{
			label: "Label5",
			backgroundColor: ["#c45850"],
			data: [555]
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