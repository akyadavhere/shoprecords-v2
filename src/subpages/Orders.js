import React, { useState } from "react"
import CollapsibleTable from "../components/CollTable"
import Table from "../components/Table"
import handleStatusChange from "../utils/handleStatusChange"

export default function Orders() {

	const tableProps = {
		head: ["Product", "Price", "Quantity", "Sub Total"],
		body: [
			{
				id: "1",
				data: ["Rice", "50", "5", "250"],
				buttons: [],
			},
		],
		callbacks: [],
		config: {
			headClass: "table-secondary",
			hoverClass: "hover-secondary"
		}
	}

	const [rows, setRows] = useState(
		[
			{
				id: "1",
				data: ["Rohan Yadav", "12-12-2012", "12:12", "1200"],
				child: <Table {...tableProps}/>,
				buttons: [
					{
						text: "Accepted",
						class: ["btn btn-sm btn-link text-decoration-none", "text-secondary"],
					},
				],
			},
		],
	)

	const collTableProps = {
		name: "CustomerOrder",
		head: ["Seller", "Date", "Time", "Total Price", "Status"],
		body: rows,
		callbacks: [handleStatusChange(setRows, rows)],
		config: {
			headClass: "table-primary",
			hoverClass: "hover-primary"
		}
	}

   return (
		<CollapsibleTable {...collTableProps}/>
   )
}
