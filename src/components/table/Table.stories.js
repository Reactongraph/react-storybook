import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import StoryMetaData from "./StoryMetaData"
import Table from "./Table"

const storyConstant = new StoryMetaData()

storiesOf("Table", module)
.add("Table", withInfo("description") (() => {
	return (
		<div>
			<Table className="table"
				tableHead={storyConstant.tableHead}
				tableData={storyConstant.userDetails}
			/>
		</div>
	)
}))