import React, { useEffect, useState } from "react"
import Table                          from "../Table"
import CollapsibleTable               from "../CollapsibleTable"
import API from "../../api/base"
import { useOutletContext } from "react-router-dom"

export default function SellerOrders() {

	const {orders: [orders, setOrders]} = useOutletContext()
	const [rows, setRows] = useState([])

	const handeOrderDelete = e => {

		API.delete(`seller/order/${e.target.id}`)
		.then(res => console.log("response data for delete request to order",res.data))
		.catch(res => console.log("error in delete request to order",res))

		setOrders(orders.filter(order => order.id !== parseInt(e.target.id)))
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
						},
						{
							text: "Delete",
							class: ["btn btn-sm btn-link text-decoration-none text-danger"],
						}
					]
				}
		)}))
   },
   [orders]) 

	const collTableProps = {
		name: "SellerOrder",
		head: ["Customer", "Date", "Time", "Amount (Rs)", "Status", "Remove"],
		body: rows,
		callbacks: [() => {}, handeOrderDelete],
		config: {
         color: "primary"
		}
	}

   return (
		<CollapsibleTable {...collTableProps}/>
   )
}
