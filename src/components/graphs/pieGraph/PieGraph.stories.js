import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import PieGraph from "./PieGraph.js";
import { options, data } from "./PieGraphMetaData";

storiesOf("Pie Graph", module)
  .addDecorator(withInfo)
  .add("Pie Graph", () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "40px" }}>
        <PieGraph options={options} data={data} />
      </div>
    );
  });
