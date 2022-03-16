import React, { useRef, useState } from "react"
import Table                       from "../Table"

export default function AddOrder() {

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
         var price = products.filter(product => product.id === e.target.value)[0].price
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
               products.filter(products => products.id === e.target[0].value)[0].name,
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

      console.log(
         [
            total,
            e.target[1].value,
            rows
         ]
      )
      e.target.reset()
      handleSaveOrderFormReset()
   }

   const products = [
      {
         id: "1",
         name: "Item 1",
         price: "120",
      },
      {
         id: "2",
         name: "Item 2",
         price: "130",

      },
      {
         id: "3",
         name: "Item 3",
         price: "140",
      },
      {
         id: "4",
         name: "Item 4",
         price: "150",
      },
   ]

   const tableProps = {
      head: ["Item","Price (Rs)","Quantity","Total (Rs)","Remove"],
      body: rows,
      callbacks: [handleItemDelete],
      config:{
         color: "primary"
      }
   }

   return (
      <>
         <div className="shadow rounded-3 mb-5">

            <form ref={addItemForm} className="input-group p-4" onChange={handleAddItemFormChange} onSubmit={handleAddItemFormSubmit}>
               
               <select className="form-select" defaultValue="" required name="item">
                  <option value="" hidden>Select Item </option>
                  {
                     products.map((item,index) => (
                        <option key={index} value={item.id}> {item.name} </option>
                     ))
                  }
               </select>

               <input className="form-control" required readOnly type="text" placeholder="Price" value={price ? `Rs. ${price}` : ""}/>
               
               <input className="form-control" required type="number" min="1" placeholder="Quantity" name="quantity"/>
               
               <input className="form-control" required readOnly type="text" placeholder="Sub Total" value={ subTotal ? `Rs. ${subTotal}` : ""}/>
               
               <input className="form-control btn-primary text-white" type="submit" value="Add"/>
            
            </form>

         </div> 

         <Table {...tableProps}/>

         <div className="shadow rounded-3">

            <form className="input-group p-4" onSubmit={handleSaveOrderFormSubmit} onReset={handleSaveOrderFormReset}>
               
               <input className="form-control" required readOnly type="text" placeholder="Grand Total" value={total ? `Rs. ${total}` : ""} style={{"width":"12%"}}/>
               
               <input className="form-control" required type="email" placeholder="Customer's Email" style={{"width":"48%"}}/>
               
               <input className="form-control btn-secondary text-white" type="submit" value="Save"/>
               
               <input className="form-control btn-dark" type="reset"/>
            
            </form>
         
         </div>
      </>
   )
}
