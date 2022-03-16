import React            from "react"
import Table            from "../Table"

export default function AllSeller() {

   const tableProps = {
      head: ["Seller", "Email", "Total", "Paid", "Due"],
      body: [
         {
            id: "1",
            data: ["Rohan Yadav", "email@example.com", "2200", "1200", "1000"],
            buttons: [],
         }
      ],
     config: {
      color: "primary",
      shadow: "primary"
     }
   }

   return (
      <Table {...tableProps}/>
   )
}
