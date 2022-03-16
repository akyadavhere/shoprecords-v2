import React, { useEffect, useState } from "react"
import Table from "../components/Table"

export default function Products() {
   const [rows, setRows] = useState([])

   const handleSubmit = e => {
      e.preventDefault()
      setRows([...rows, {
         id : "8",
         data: [e.target[0].value, e.target[1].value]
      }])
   }

   const handleDelete = e => {
      setRows(rows.filter(item => item.id !== e.target.id))
   }

   const products = [
      {
         id: "1",
         name: "Item-1",
         price: "10"
      },
      {
         id: "2",
         name: "Item-2",
         price: "20"
      },
      {
         id: "3",
         name: "Item-3",
         price: "30"
      },
      {
         id: "4",
         name: "Item-4",
         price: "40"
      }
   ]

   var baseRows = [
      {
         id: "1",
         data: ["Item-1","120"]
      },
      {
         id: "2",
         data: ["Item-2","120"]
      },
      {
         id: "3",
         data: ["Item-3","120"]
      },
      {
         id: "4",
         data: ["Item-4","120"]
      },
   ]

   useEffect(() => {
		setRows(baseRows)
	},[])

   const tableData = {
      class: "primary",
      buttons: [
         {
            head: "Remove",
            name: "Delete",
            class: "btn btn-sm btn-link text-danger text-decoration-none",
            callbackFunc: handleDelete,
         }
      ],
      head: ["Product","Price"],
      rows: rows
   }

   return (
      <>
         <div className="shadow rounded-3 mb-5">
            <form  className="input-group p-4" onSubmit={handleSubmit}>
               <input className="form-control" required type="text" placeholder="Product" style={{"width":"40%"}}/>
               <input className="form-control" required type="number" min="0" step={100} placeholder="Price"/>
               <input className="form-control btn-primary text-white" type="submit" value="Add"/>
            </form>
         </div>

         <div className="shadow rounded-3 mb-5">
            <Table data={tableData}/>
         </div>
      </>
   )
}
