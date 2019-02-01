export const data =  {
	labels: [1500 ,1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
	datasets: [{ 
			data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
			label: "Africa",
			borderColor: "#3e95cd",
			fill: false
		}, { 
			data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
			label: "Asia",
			borderColor: "#8e5ea2",
			fill: false
		},
	]
}

export const options = {
	title: {
		display: true,
		text: 'Line Graph'
	},
	legend: {
		display: true,
		position: "bottom"
	},
	responsive: true,
	maintainAspectRatio: true
}