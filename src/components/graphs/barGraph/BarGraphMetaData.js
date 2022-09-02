const label = ["Label1", "Label2", "Label3", "Label4", , "Label5"];
export const data = {
  labels: label,
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: ["#3e95cd"],
      data: [2500, 3003, 700, 1100, 555, 1000],
    },
    {
      label: "Dataset 2",
      backgroundColor: ["#8e5ea2"],
      data: [3003, 555, 700, 2500, 1100, 1000],
    },
  ],
};

export const options = {
  title: {
    display: true,
    text: "Bar Graph",
  },

  legend: {
    display: true,
    position: "bottom",
  },

  responsive: true,
  maintainAspectRatio: true,
};
