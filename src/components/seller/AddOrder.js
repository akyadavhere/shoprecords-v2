import React, { useRef, useState } from "react"
import { useOutletContext } from "react-router-dom"
import Table                       from "../Table"
import API from "../../api/base"

export default function AddOrder() {

   const {products:[products]} = useOutletContext()
   const {customers:[customers]} = useOutletContext()

   const [price,    setPrice]    = useState("")
   const [subTotal, setSubTotal] = useState("")
   const [total,    setTotal]    = useState("")
   const [rows,     setRows]     = useState([])

   const addItemForm   = useRef()

   const val = s => s.split(" ")[1]

   const handleItemDelete = e => {

      if (rows.length > 1) {
         setTotal(total - parseInt(e.target.value))
      } else {
         setTotal("")
      }
      setRows(rows.filter(row => row.id !== e.target.id))
   }


   const resetAddItemForm = () => {
      addItemForm.current[0].value = ""
      addItemForm.current[2].value = ""
      setPrice("")
      setSubTotal("")
   }


   const handleAddItemFormChange = e => {

      if (e.target.name === "item") {
         var price = products.filter(product => product.id === parseInt(e.target.value))[0].price
         setPrice(price)

         if (addItemForm.current[2].value) {
            setSubTotal(addItemForm.current[2].value * price)
         }
      }
      else if (e.target.name === "quantity" && addItemForm.current[1].value) {
         setSubTotal(val(addItemForm.current[1].value) * e.target.value)
      }
   }  


   const handleAddItemFormSubmit = e => {
      e.preventDefault()

      if (! rows.some(row => row.id === e.target[0].value)) {

         var row = {
            id: e.target[0].value,
            data: [
               products.filter(products => products.id === parseInt(e.target[0].value))[0].name,
               val(e.target[1].value),
               e.target[2].value,
               val(e.target[3].value),
            ],
            buttons: [
               {
                  text: "Delete",
                  value: val(e.target[3].value),
                  class: ["btn btn-sm btn-link text-decoration-none text-danger"]
               }
            ]
         }

         setRows( [...rows, row])

         if (total) {
            setTotal(parseInt(total) + parseInt(val(e.target[3].value)))

         } else {
            setTotal(val(e.target[3].value))
         }
         resetAddItemForm()
      }
   }


   const handleSaveOrderFormReset = () => {
      resetAddItemForm()
      setRows([])
      setTotal("")
   }  

   const handleSaveOrderFormSubmit = e => {
      e.preventDefault()

      const transaction = {
            customer: e.target[1].value,
            amount: total,
            items: rows.map(row => ({
               product: row.id,
               quantity: row.data[2]
            }))
         }

      API.post("purchase/", transaction)
      .then(res => console.log("response data for post request to purchase",res.data))
      .catch(res => console.log("error in post request to purchase",res))

      e.target.reset()
      handleSaveOrderFormReset()
   }


   const tableProps = {
      head: ["Item","Price (Rs)","Quantity","Total (Rs)","Remove"],
      body: rows,
      callbacks: [handleItemDelete],
      config:{
         color: "primary",
         shadow: true,
      }
   }

   return (
      <>
         <div className="shadow rounded-3 mb-5">

            <form ref={addItemForm} className="input-group p-4" onChange={handleAddItemFormChange} onSubmit={handleAddItemFormSubmit}>
               
               <select className="form-select" defaultValue="" required name="item">
                  <option value="" hidden>Select Item</option>
                  {
                     products.map(item => (
                        <option key={item.id} value={item.id}> {item.name} </option>
                     ))
                  }
               </select>

               <input className="form-control" required readOnly type="text" placeholder="Price" value={price ? `Rs. ${price}` : ""}/>
               
               <input className="form-control" required type="number" min="0" step="any" placeholder="Quantity" name="quantity"/>
               
               <input className="form-control" required readOnly type="text" placeholder="Sub Total" value={ subTotal ? `Rs. ${subTotal}` : ""}/>
               
               <input className="form-control btn-primary text-white" type="submit" value="Add"/>
            
            </form>

         </div> 

         <Table {...tableProps}/>

         <div className="shadow rounded-3">

            <form className="input-group p-4" onSubmit={handleSaveOrderFormSubmit} onReset={handleSaveOrderFormReset}>
               
               <input className="form-control" required readOnly type="text" placeholder="Grand Total" value={total ? `Rs. ${total}` : ""} style={{"width":"12%"}}/>
               
               <input className="form-control" list="customerList" required type="email" placeholder="Customer's Email" style={{"width":"48%"}}/>
               
               <datalist id="customerList">
                  {
                     customers.map(customer => (
                        <option key={customer.id} value={customer.email}> {customer.name} </option>
                     ))
                  }
               </datalist>
               
               <input className="form-control btn-secondary text-white" type="submit" value="Save"/>
               
               <input className="form-control btn-dark" type="reset"/>
            
            </form>
         
         </div>
      </>
   )
}
