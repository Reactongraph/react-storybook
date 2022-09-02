import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Input from "./Input.js";

storiesOf("Input Field", module)
  .addDecorator(withInfo)
  .add("Input Field", () => {
    return (
      <Input
        name="inputField1"
        className="form-control"
        style={{ width: "20%" }}
        type="text"
        placeholder="placeholder"
        onChange={action("Input Changed")}
      />
    );
  });
