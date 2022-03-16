import React, { useEffect, useState } from "react"
import Table                          from "../Table"

export default function AllCustomer() {

   const [rows, setRows] = useState([])

   const handleDeleteCustomer = e => {
      if (rows.filter(row => row.id === e.target.id)[0].data[4] === "0") {
         setRows(rows.filter(row => row.id !== e.target.id))
      }
   }

   useEffect(() => {
      setRows(
         [
            {
               id: "1",
               data: ["Rohan Yadav", "email@example.com", "2200", "1200", "1000"],
               buttons: [
                  {
                     text: "Delete",
                     class: ["btn btn-sm btn-link text-danger text-decoration-none"]
                  }
               ],
            },
         ]
      )
   },[])

   const tableProps = {
      head: ["Customer", "Email", "Total (Rs)", "Paid (Rs)", "Due (Rs)", "Remove"],
      body: rows,
      callbacks: [handleDeleteCustomer],
      config: {
         color: "primary",
         shadow: "primary",
      },
   }

   return (
      <Table {...tableProps}/>
   )
}
