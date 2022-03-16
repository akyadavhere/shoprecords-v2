import React, { useEffect, useState } from "react"
import Table                          from "../Table"

export default function Products() {

   const [rows, setRows] = useState([])

   const handleProductSubmit = e => {
      e.preventDefault()

      const row = {
         id: "2",
         data: [e.target[0].value, e.target[1].value],
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
      setRows([
			{
				id: "1",
				data: ["Biscuits", "60"],
				buttons: [
					{
						text: "Delete",
						class: ["btn btn-sm btn-link text-decoration-none text-danger"],
					},
				],
			},
		])
	},[])


   const tableProps = {
      head: ["Product", "Price (Rs)", "Remove"],
      body: rows,
      callbacks: [e => setRows(rows.filter(row => row.id !== e.target.id))],
      config: {
         color: "primary"
      } 
   }


   return (
      <>
         <div className="shadow rounded-3 mb-5">

            <form  className="input-group p-4" onSubmit={handleProductSubmit}>

               <input className="form-control" required type="text" placeholder="Product" style={{"width":"40%"}}/>
               
               <input className="form-control" required type="number" min="0" step="100" placeholder="Price"/>
               
               <input className="form-control btn-primary text-white" type="submit" value="Add"/>
            
            </form>
         
         </div>

         <Table {...tableProps}/>

      </>
   )
}
