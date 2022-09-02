import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import BarGraph from "./BarGraph.js";
import HorizontalBarGraph from "./HorizontalBarGraph";
import { options, data } from "./BarGraphMetaData";

storiesOf("Bar Graph", module)
  .addDecorator(withInfo)
  .add("Bar Graph", () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "40px" }}>
        <BarGraph options={options} data={data} />
      </div>
    );
  })
  .add("HorizontalBar Graph", () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "40px" }}>
        <HorizontalBarGraph options={options} data={data} />
      </div>
    );
  });
