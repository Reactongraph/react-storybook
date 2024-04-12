import React, { useEffect, useState } from "react";
import "./App.css";
import BarGraph from "./components/graphs/barGraph/BarGraph";
import LineGraph from "./components/graphs/lineGraph/LineGraph";
import Sidebar from "./components/sidebar";
import OrderTracker from "./components/order/order";
import Payment from "./components/order/payment";

// Sample data for graphs
const graphData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Sample options for graphs
const graphOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const App = () => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(100);
  const [counter3, setCounter3] = useState(230);

  useEffect(() => {
    const animateCounter = (start, end, duration, setCounter) => {
      const startTime = performance.now();
      const animate = () => {
        const now = performance.now();
        const elapsed = now - startTime;
        if (elapsed < duration) {
          const current = start + (end - start) * (elapsed / duration);
          setCounter(Math.round(current));
          requestAnimationFrame(animate);
        } else {
          setCounter(end);
        }
      };
      animate();
    };

    animateCounter(1, 1100, 5000, setCounter1);
    animateCounter(100, 10000, 5000, setCounter2);
    animateCounter(1, 230, 230, setCounter3); // No animation for counter3
  }, []);

  return (
    <div className="App">
      <div className="main" style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />

        <div className="dashboard" style={{ width: "100%" }}>
          <h2 className="title1">Dashboard</h2>

          <div class="cookie-cards-container">
            <div class="cookie-card">
              <span class="title">{counter1}+</span>
            </div>
            <div class="cookie-card">
              <span class="title">${counter2}k</span>
            </div>
            <div class="cookie-card">
              <span class="title">{counter3}+</span>
            </div>
          </div>
          <div
            className="graphs-container"
            style={{
              display: "grid",
              gridTemplateColumns: "60fr 60fr",
              gap: "1rem",
              placeItems: "center",
              marginTop: "50px",
            }}
          >
            <div
              className="graph-item card"
              style={{ height: "fit-content", padding: "1rem" }}
            >
              <BarGraph options={graphOptions} data={graphData} />
            </div>

            <div className="graph-item">
              <div className="card">
                <LineGraph options={graphOptions} data={graphData} />
              </div>
            </div>
            <div className="graph-item">
              <div className="card">
                <OrderTracker />
              </div>
            </div>

            <div className="graph-item">
              <div className="card">
                <Payment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
