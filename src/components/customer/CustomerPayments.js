import React from "react"
import Table from "../Table"

export default function CustomerPayments() {

   const tableProps = {
      head: ["Seller", "Date", "Time", "Amount (Rs)"],
      body: [
         {
            id: "1",
            data: ["Rohan Yadav", "12-12-2012", "12:12", "200"],
            buttons: [],
         },
      ],
      config: {
         color: "primary",
         shadow: true,
      },
   }

   return (
      <Table {...tableProps}/>
   )
}
