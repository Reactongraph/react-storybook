import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import BarGraph from "./BarGraph.js"
import { options, data } from './BarGraphMetaData'

storiesOf("Bar Graph", module)
.add("Bar Graph", withInfo("description") (() => {
  return (
    <div style={{ height: "500px", width: "500px", margin: "40px" }}>
      <BarGraph
        options={options}
        data={data}
      />
    </div>
  )
}))