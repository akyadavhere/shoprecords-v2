import React, { useEffect, useState } from "react"
import Table                          from "../Table"
import CollapsibleTable               from "../CollapsibleTable"
import API from "../../api/base"
import { useOutletContext } from "react-router-dom"

export default function CustomerOrders() {

	const [rows, setRows] = useState([])
	const {orders: [orders, setOrders]} = useOutletContext([])

	const handleStatusChange = e => {

		API.patch(`customerorder/${e.target.id}`)
		.then(res => {
			console.log("response data for patch request to customerorder", res.data)
			setOrders(orders.map(order => {
				if (order.id === parseInt(e.target.id)){
					order.status = !order.status
				}
				return order
			}))
		})
		.catch(res => console.log("error in patch request to customerorder", res))
	}


	useEffect(() => {

		setRows(orders.map(order => {
			var datetime = new Date(order.datetime)
			return (
				{
					id: order.id,
					data: [order.opposite_role, datetime.toDateString().slice(4), datetime.toTimeString().slice(0,5), Number(order.amount)],
					child: <Table {
						...{
							head: ["Product", "Price (Rs)", "Quantity", "Total (Rs)"],
							body: order.items.map(item => (
								{
									id: item.id,
									data: [item.name, item.price, item.quantity, item.total],
									buttons: [],
								}
							)),
							callbacks: [],
							config: {
								color: "secondary"
							}
						}
					}/>,
					buttons: [
						{
							text: order.status ? "Accepted" : "Pending",
							class: ["btn btn-sm btn-link text-decoration-none", `text-${order.status ? "secondary" : "warning"}`]
						}
					]
				}
		)}))
   },
   [orders]) 


	const collTableProps = {
		name: "CustomerOrder",
		head: ["Seller", "Date", "Time", "Amount", "Status"],
		body: rows,
		callbacks: [handleStatusChange],
		config: {
         color: "primary"
		}
	}

   return (
		<CollapsibleTable {...collTableProps}/>
   )
}
