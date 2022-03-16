import React, { useRef, useState } from "react"
import Table from "../components/Table"

export default function AddOrder() {
   const [price, setPrice] = useState("")
   const [subTotal, setSubTotal] = useState("")
   const [total, setTotal] = useState("")
   const [rows, setRows] = useState([])

   const formOne = useRef()

   const val = e => parseInt(e.split(" ")[1])

   const formOneReset = () => {
      formOne.current[0].value = ""
      formOne.current[2].value = ""
      setPrice("")
      setSubTotal("")
   }

   const handleFormOneChange = e => {
      if (e.target.name === "item"){
         var price = products.filter(item => item.id === e.target.value)[0].price
         setPrice(price)
         if (formOne.current[2].value){
            setSubTotal(formOne.current[2].value * price)
         }
      }
      if (e.target.name === "quantity" && formOne.current[1].value){
         setSubTotal(val(formOne.current[1].value) * e.target.value)
      }
   }  

   const handleDelete = e => {
      setTotal(rows.length > 1?total-parseInt(products.filter(item => item.id === e.target.id)[0].price):"")
      setRows(rows.filter(item => item.id !== e.target.id))
   }

   const handleFormOneSubmit = e => {
      e.preventDefault()
      if (!rows.some(item => item.id === e.target[0].value)){
         setRows([...rows, {
            id: e.target[0].value,
            data: [
               products.filter(item => item.id === e.target[0].value)[0].name,
               val(e.target[1].value),
               parseInt(e.target[2].value),
               val(e.target[3].value),
            ]
         }])
         setTotal(total?total + val(e.target[3].value):val(e.target[3].value))
         formOneReset()
      }
   }

   const handleFormTwoReset = () => {
      formOneReset()
      setTotal("")
      setRows([])
   }  

   const handleFormTwoSubmit = e => {
      e.preventDefault()
      console.log(total,e.target[1].value,rows)
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

   const tableData = {
      class: "primary",
      head: ["Item","Price (Rs)","Quantity","Total (Rs)"],
      buttons: [
         {
            head: "Remove",
            name: "Delete",
            class: "btn btn-sm btn-link text-danger text-decoration-none",
            callbackFunc: handleDelete,
         }
      ],
      rows: rows
   }

   return (
      <>
         <div className="shadow rounded-3 mb-5">
            <form ref={formOne} className="input-group p-4" onChange={handleFormOneChange} onSubmit={handleFormOneSubmit}>
               <select className="form-select" defaultValue="" required name="item">
                  <option value="" hidden>Select Item</option>
                  {products.map((item,index) => (
                     <option key={index} value={item.id}>{item.name}</option>
                  ))}
               </select>
               <input className="form-control" required readOnly type="text" placeholder="Price" value={price?`Rs. ${price}`:""}/>
               <input className="form-control" required type="number" min="1" placeholder="Quantity" name="quantity"/>
               <input className="form-control" required readOnly type="text" placeholder="Sub Total" value={subTotal?`Rs. ${subTotal}`:""}/>
               <input className="form-control btn-primary text-white" type="submit" value="Add"/>
            </form>
         </div> 

         <div className="shadow rounded-3 mb-5">
            <Table data={tableData}/>
         </div>

         <div className="shadow rounded-3">
            <form className="input-group p-4" onReset={handleFormTwoReset} onSubmit={handleFormTwoSubmit}>
               <input className="form-control" required readOnly type="text" placeholder="Grand Total" value={total?`Rs. ${total}`:""} style={{"width":"12%"}}/>
               <input className="form-control" required type="email" placeholder="Customer's Email" style={{"width":"48%"}}/>
               <input className="form-control btn-secondary text-white" type="submit" value="Save"/>
               <input className="form-control btn-dark" type="reset"/>
            </form>
         </div>
      </>
   )
}
