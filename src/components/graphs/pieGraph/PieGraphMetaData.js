export const data =  {

	labels: ["Label1", "Label2", "Label3", "Label4", "Label5"],

	datasets: [{
	  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
	  data: [2500, 3300, 700, 1100, 433]
	}]

}
export const options = {
	title: {
		display: true,
		text: 'Pie Graph'
	},

	legend: {
		display: true,
		position: "bottom"
	},

	responsive: true,
	maintainAspectRatio: true
}