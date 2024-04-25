import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutGraph = ({ options, data }) => {
  return <Doughnut options={options} data={data} height={731} width={730} />;
};

DoughnutGraph.propTypes = {
  options: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default DoughnutGraph;
