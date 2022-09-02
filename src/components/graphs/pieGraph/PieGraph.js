import React from "react";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";

const PieGraph = ({ options, data }) => {
  return <Pie options={options} data={data} />;
};

PieGraph.propTypes = {
  options: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default PieGraph;
