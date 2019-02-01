import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import tableMetaData from "./tableMetaData"
import Table from "./Table"

const tableData = new tableMetaData()

storiesOf("Table", module)
.add("Table", withInfo("description") (() => {
	return (
		<div>
			<Table className="table"
				tableHead={tableData.tableHead}
				tableData={tableData.userDetails}
			/>
		</div>
	)
}))