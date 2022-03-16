import React, { useEffect, useState } from "react"
import Table                          from "../Table"

export default function SellerPayments() {

   const [rows, setRows] = useState([])

   const handlePaymentsSubmit = e => {
      e.preventDefault()

      const row = {
         id: "2",
         data: [e.target[0].value, "12-12-2012", "12:12", e.target[1].value],
         buttons: [
            {
               text: "Delete",
               class: ["btn btn-sm btn-link text-decoration-none text-danger"],
            },
         ],
      }
      setRows([...rows, row])
      e.target.reset()
   }

   useEffect(() => {
      setRows(
         [
            {
               id: "1",
               data: ["Rohan Yadav", "12-12-2012", "12:12", "200"],
               buttons: [
                  {
                     text: "Delete",
                     class: ["btn btn-sm btn-link text-danger text-decoration-none"]
                  }
               ],
            },
         ],
      )
   }, [])
   

   const tableProps = {
      head: ["Customer", "Date", "Time", "Amount (Rs)", "Remove"],
      body: rows,
      callbacks: [e => setRows(rows.filter(row => row.id !== e.target.id))],
      config: {
         color: "primary",
         shadow: true,
      },
   }


   return (
      <>
         <div className="shadow rounded-3 mb-5">

            <form  className="input-group p-4" onSubmit={handlePaymentsSubmit}>

               <input className="form-control" required type="email" placeholder="Customer's Email" style={{"width":"40%"}}/>
               
               <input className="form-control" required type="number" min="0" step="100" placeholder="Amount"/>
               
               <input className="form-control btn-primary text-white" type="submit" value="Add"/>
            
            </form>
         
         </div>

         <Table {...tableProps}/>

      </>
   )
}
