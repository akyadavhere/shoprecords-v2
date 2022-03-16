import React, { useEffect, useState } from "react"
import Table                          from "../Table"
import CollapsibleTable               from "../CollapsibleTable"
import handleStatusChange             from "../../utils/handleStatusChange"

export default function CustomerOrders() {

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
						class: ["btn btn-sm btn-link text-decoration-none", "text-secondary"],
					},
				],
			},
		])
   },
   []) 


	const collTableProps = {
		name: "CustomerOrder",
		head: ["Seller", "Date", "Time", "Total Price", "Status"],
		body: rows,
		callbacks: [handleStatusChange(setRows, rows)],
		config: {
         color: "primary"
		}
	}

   return (
		<CollapsibleTable {...collTableProps}/>
   )
}
