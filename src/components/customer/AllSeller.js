import React, { useEffect, useState }            from "react"
import { useOutletContext } from "react-router-dom"
import Table            from "../Table"

export default function AllSeller() {

   const {sellers:[sellers]} = useOutletContext()
   const [rows, setRows] = useState([])

   useEffect(() => {
      setRows(sellers.map(seller => (
         {
            id: seller.id,
            data: [seller.name, seller.email, seller.total ? seller.total : 0, seller.paid ? seller.paid : 0, Math.round(seller.total - seller.paid)],
            buttons: []
         }
      )))
   },[sellers])


   const tableProps = {
      head: ["Seller", "Email", "Total (Rs)", "Paid (Rs)", "Due (Rs)"],
      body: rows,
      config: {
         color: "primary",
         shadow: "primary"
     }
   }

   return (
      <Table {...tableProps}/>
   )
}
