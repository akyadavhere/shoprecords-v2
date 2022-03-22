import React, { useEffect, useState } from "react"
import Table                          from "../Table"
import { useOutletContext } from "react-router-dom"
import API from "../../api/base"

export default function AllCustomer() {

   const {customers: [customers, setCustomers]} = useOutletContext()
   const [rows, setRows] = useState([])

   const handleDeleteCustomer = e => {
      var customer = customers.filter(customers => customers.id === parseInt(e.target.id))[0]
      if (Math.round(customer.total - customer.paid) === 0) {

         API.delete(`customer/${e.target.id}`)
         .then(res => console.log("response data for delete request to customer",res.data))
         .catch(res => console.log("error in delete request to customer",res))

         setCustomers(customers.filter(customers => customers.id !== parseInt(e.target.id)))
      }
   }

   useEffect(() => {
      setRows(customers.map(customer => (
         {
            id: customer.id,
            data: [customer.name, customer.email, customer.total, customer.paid, Math.round(customer.total - customer.paid)],
            buttons: [
               {
                  text: "Delete",
                  class: ["btn btn-sm btn-link text-danger text-decoration-none"]
               }
            ]
         }
      )))
   },[customers])

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
