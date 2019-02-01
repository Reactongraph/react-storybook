import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
	labels: [
		'Open',
		'Bounce',
		'Unsubscribe'
	],
	datasets: [{
		data: [40, 20, 40],
		backgroundColor: [
		'#1DC7EA',
		'#FB404B',
		'#FFA534'
		],
		hoverBackgroundColor: [
        '#1DC7EA',
        '#FB404B',
        '#FFA534'
        ]
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
        display: true,
        position: 'bottom'
    }
}

class PieGraph extends React.Component {
    render() {
        return (
          <div>
            <Pie options={options} data={data} />
          </div>
        );
    }
}

export default PieGraph