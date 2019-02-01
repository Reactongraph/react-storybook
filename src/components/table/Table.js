import React from "react"
import PropTypes from "prop-types"

function renderData(tableHead, tableData, key, props) {
  return tableHead.map((data, index) => {
    return <td key={index}>{tableData[key][data.field] !== null ? tableData[key][data.field] : "----"}</td>
  })
}

const Table = (props) => {
  const { className, tableData, tableHead, style } = props
  return (
    <table className={className} style={style}>
      <thead>
        <tr>
          {
            tableHead && tableHead.map((data, key) => (
              <th key={key}>{data.label}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          tableData && tableData.map((row, key) => (
            <tr key={key}>
              {renderData(tableHead, tableData, key, props)}
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  className: PropTypes.string,
  tableData: PropTypes.array,
  tableHead: PropTypes.array,
}

export default Table
