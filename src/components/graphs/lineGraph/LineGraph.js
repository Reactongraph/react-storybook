import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ options, data }) => {
  return <Line options={options} data={data} />;
};

LineGraph.propTypes = {
  options: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default LineGraph;
