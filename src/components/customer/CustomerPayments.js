import React, { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import Table from "../Table"

export default function CustomerPayments() {

   const {payments:[payments]} = useOutletContext()
   const [rows, setRows] = useState([])

   useEffect(() => {
      console.log(payments)
      setRows(payments.map(payment => {
         var datetime = new Date(payment.datetime)
         return (
            {
               id: payment.id,
               data: [payment.opposite_role, datetime.toDateString().slice(4), datetime.toTimeString().slice(0,5), payment.amount],
               buttons: []
            }
      )}))
   },
   [payments])

   const tableProps = {
      head: ["Customer", "Date", "Time", "Amount (Rs)",],
      body: rows,
      callbacks: [],
      config: {
         color: "primary",
         shadow: true,
      },
   }

   return (
      <Table {...tableProps}/>
   )
}
