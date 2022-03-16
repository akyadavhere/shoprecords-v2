import React, { useEffect, useState } from "react"
import Table                          from "../Table"
import CollapsibleTable               from "../CollapsibleTable"

export default function SellerOrders() {

	const [rows, setRows] = useState([])

	useEffect(() => {

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
            color: "secondary"
         }
      }

      setRows([
			{
				id: "1",
				data: ["Rohan Yadav", "12-12-2012", "12:12", "1200"],
				child: <Table {...tableProps}/>,
				buttons: [
					{
						text: "Accepted",
						class: ["btn btn-sm btn-link text-decoration-none text-secondary"]
					},
					{
						text: "Delete",
						class: ["btn btn-sm btn-link text-decoration-none text-danger"],
					},
				],
			},
		])
   },
   []) 

	const collTableProps = {
		name: "CustomerOrder",
		head: ["Customer", "Date", "Time", "Total Price", "Status", "Remove"],
		body: rows,
		callbacks: [() => {}, e => setRows(rows.filter(row => row.id !== e.target.id))],
		config: {
         color: "primary"
		}
	}

   return (
		<CollapsibleTable {...collTableProps}/>
   )
}
