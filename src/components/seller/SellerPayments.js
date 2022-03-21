import React, { useEffect, useState } from "react"
import Table                          from "../Table"
import API from "../../api/base"
import { useOutletContext } from "react-router-dom"

export default function SellerPayments() {
   
   const {payments:[payments, setPayments]} = useOutletContext()
   const [rows, setRows] = useState([])

   const handlePaymentsSubmit = e => {
      e.preventDefault()

      const payment = {
         customer: e.target[0].value,
         amount: e.target[1].value
      }
      API.post("payment/", payment)
      .then(res => {
         console.log(res)
         setPayments([...payments,res.data])
      })
      .catch(res => console.log(res))

      e.target.reset()
   }

   const handlePaymentDelete = e => {
      API.delete(`payment/${e.target.id}`)
      .then(res => console.log(res))
      .catch(res => console.log(res))

      setPayments(payments.filter(payment => payment.id !== parseInt(e.target.id)))
   }


   useEffect(() => {
      setRows(payments.map(payment => (
            {
               id: payment.id,
               data: [payment.customer, "12-12-2012", "12:12", payment.amount],
               buttons: [
                  {
                     text: "Delete",
                     class: ["btn btn-sm btn-link text-danger text-decoration-none"]
                  }
               ]
            }
      )))
   },
   [payments])
   

   const tableProps = {
      head: ["Customer", "Date", "Time", "Amount (Rs)", "Remove"],
      body: rows,
      callbacks: [handlePaymentDelete],
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
