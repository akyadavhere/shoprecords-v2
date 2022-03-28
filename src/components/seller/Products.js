import React, { useEffect, useState } from "react"
import Table from "../Table"
import API from "../../api/base"
import { useOutletContext } from "react-router-dom"

export default function Products() {

   const {products:[products, setProducts]} = useOutletContext()
   const [rows, setRows] = useState([])

   const handleProductSubmit = e => {
      e.preventDefault()

      var product = {
         name: e.target[0].value,
         price:  e.target[1].value,
      }

      API.post("seller/product", product)
      .then(res => {
         console.log("response data for post request to product",res.data)
         if (res.data.id) {
            setProducts([res.data, ...products])
         }
      }).catch(res => console.log("error in post request to product",res))
      e.target.reset()
   }


   const handleProductDelete = e => {

      API.delete(`seller/product/${e.target.id}`)
      .then(res => console.log("response data for delete request to product",res))
      .catch(res => console.log("error in delete request to product",res))

      setProducts(products.filter(product => product.id !== parseInt(e.target.id)))
   }


   useEffect(() => {
      setRows(products.map(product => (
         {
            id: product.id,
            data: [product.name, product.price],
            buttons: [
               {
                  text: "Delete",
                  class: ["btn btn-sm btn-link text-decoration-none text-danger"]
               }
            ]
         }
      ))) 
	},[products])


   const tableProps = {
      head: ["Product", "Price (Rs)", "Remove"],
      body: rows,
      callbacks: [handleProductDelete],
      config: {
         color: "primary",
         shadow: true,
      } 
   }


   return (
      <>
         <div className="shadow rounded-3 mb-5">

            <form  className="input-group p-4" onSubmit={handleProductSubmit}>

               <input className="form-control" required type="text" placeholder="Product" style={{"width":"40%"}}/>
               
               <input className="form-control" required type="number" min="1" step="1" placeholder="Price"/>
               
               <input className="form-control btn-primary text-white" type="submit" value="Add"/>
            
            </form>
         
         </div>

         <Table {...tableProps}/>

      </>
   )
}
