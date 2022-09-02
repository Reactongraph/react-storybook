import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = ({ options, data }) => {
  return <Bar options={options} data={data} />;
};

BarGraph.propTypes = {
  options: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default BarGraph;
