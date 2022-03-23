import React, { useEffect, useState } from "react"
import Table                          from "../Table"
import API from "../../api/base"
import { useOutletContext } from "react-router-dom"

export default function SellerPayments() {
   
   const {payments:[payments, setPayments]} = useOutletContext()
   const {customers:[customers]} = useOutletContext()
   const [rows, setRows] = useState([])

   const handlePaymentsSubmit = e => {
      e.preventDefault()

      const payment = {
         customer: e.target[0].value,
         amount: e.target[1].value
      }
      API.post("payment/", payment)
      .then(res => {
         setPayments([res.data,...payments])
      })
      .catch(res => console.log("error in post request to payment",res))
      e.target.reset()
   }

   const handlePaymentDelete = e => {
      API.delete(`payment/${e.target.id}`)
      .then(res => console.log("response data for delete request to payment",res.data))
      .catch(res => console.log("error in delete request to payment",res))

      setPayments(payments.filter(payment => payment.id !== parseInt(e.target.id)))
   }


   useEffect(() => {
      setRows(payments.map(payment => {
         var datetime = new Date(payment.datetime)
         return (
            {
               id: payment.id,
               data: [payment.opposite_role, datetime.toDateString().slice(4), datetime.toTimeString().slice(0,5), payment.amount],
               buttons: [
                  {
                     text: "Delete",
                     class: ["btn btn-sm btn-link text-danger text-decoration-none"]
                  }
               ]
            }
      )}))
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

               <input className="form-control" list="customerList" required type="email" placeholder="Customer's Email" style={{"width":"40%"}}/>
               
               <datalist className="" id="customerList">
                  {
                     customers.map(customer => (
                        <option key={customer.id} value={customer.email}> {customer.name} </option>
                     ))
                  }
               </datalist>
               
               <input className="form-control" required type="number" min="1" placeholder="Amount"/>
               
               <input className="form-control btn-primary text-white" type="submit" value="Add"/>
            
            </form>
         
         </div>

         <Table {...tableProps}/>

      </>
   )
}
