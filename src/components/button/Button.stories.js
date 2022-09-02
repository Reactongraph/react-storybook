import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import Button from "./Button.js";

storiesOf("Buttons", module)
  .addDecorator(withInfo)
  .add("Default", () => {
    return (
      <Button
        className="btn btn-default"
        value="Default"
        onClick={action("Default button Click")}
      />
    );
  })

  .add("Primary", () => {
    return (
      <Button
        value="Primary"
        type="button"
        className="btn btn-primary"
        onClick={action("Primary button Click")}
      />
    );
  })

  .add("Danger", () => {
    return (
      <Button
        value="Danger"
        type="button"
        className="btn btn-danger"
        onClick={action("Danger button Click")}
      />
    );
  });
