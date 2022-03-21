import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Panel from "../components/Panel"
import API from "../api/base"

export default function Seller() {

   const [products, setProducts] = useState([])
   const [payments, setPayments] = useState([])

   useEffect(() => {

      API.get("product/")
      .then(res => {
         setProducts(res.data)
         console.log(res)
      })
      .catch(res => console.log(res))

      API.get("payment/")
      .then(res => {
         console.log(res.data)
         setPayments(res.data)
      })
      .catch(res => console.log(res))

   },[])

   const menus = [
      [
         "Dashboard",
         "bi-grid-fill",
      ],
      [
         "Add Order",
         "bi-plus-square",
      ],
      [
         "Orders",
         "bi-cart-fill",
      ],
      [
         "Payments",
         "bi-credit-card-fill",
      ],
      [
         "Customers",
         "bi-person-fill",
      ],
      [
         "Products",
         "bi-bag-fill",
      ],
   ]

   const outletContex = {
      products: [products, setProducts],
      payments: [payments, setPayments]
   }

   return (
      <Panel menus={menus} url="/customer">
         <Outlet context={outletContex}/>
      </Panel>
   )
}
