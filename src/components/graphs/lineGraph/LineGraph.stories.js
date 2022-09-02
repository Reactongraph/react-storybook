import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import LineGraph from "./LineGraph.js";
import { options, data } from "./lineGraphMetaData";

storiesOf("Line Graph", module)
  .addDecorator(withInfo)
  .add("Line Graph", () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "40px" }}>
        <LineGraph options={options} data={data} />
      </div>
    );
  });
