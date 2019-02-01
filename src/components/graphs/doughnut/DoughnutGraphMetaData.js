export const data =  {
	labels: ["Label1", "Label2", "Label3", "Label4", "Label5"],
	datasets: [
		{
		backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
		data: [200, 400, 900, 1300, 2100]
		}
	]
}

export const options = {
	title: {
		display: true,
		text: 'DoughNut Graph'
	},
	legend: {
		display: true,
		position: "bottom"
	},
	responsive: true,
	maintainAspectRatio: true
}