import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import DoughnutGraph from "./DoughnutGraph"
import { options, data } from './DoughnutGraphMetaData'

storiesOf("Doughnut Graph", module)
.add("Doughnut Graph", withInfo("description") (() => {
  return (
    <div style={{ height: "500px", width: "500px", margin: "40px" }}>
      <DoughnutGraph
        options={options}
        data={data}
      />
    </div>
  )
}))