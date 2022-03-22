import React, { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Panel from "../components/Panel"
import API from "../api/base"

export default function Seller() {

   const location = useLocation()
   const [dashboard, setDashboard] = useState([])
   const [products, setProducts] = useState([])
   const [payments, setPayments] = useState([])
   const [orders, setOrders] = useState([])
   const [customers, setCustomers] = useState([])

   useEffect(() => {
      const activeOutlet = location.pathname.split("/")[location.pathname.split("/").length-1]

      if (activeOutlet === "dashboard"){
         API.get("dashboard/")
         .then(res => {
            console.log("response data for get request to dashboard",res.data)
            setDashboard(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))

         API.get("customer/")
         .then(res => {
            console.log("response data for get request to customer",res.data)
            setCustomers(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))
      }
      else if (activeOutlet === "addorder"){
         API.get("product/")
         .then(res => {
            console.log("response data for get request to product",res.data)
            setProducts(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))

         API.get("customer/")
         .then(res => {
            console.log("response data for get request to customer",res.data)
            setCustomers(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))
      }
      else if (activeOutlet === "orders"){
         API.get("order/")
         .then(res => {
            console.log("response data for get request to order",res.data)
            setOrders(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))
      }
      else if (activeOutlet === "products"){
         API.get("product/")
         .then(res => {
            console.log("response data for get request to product",res.data)
            setProducts(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))
      }
      else if (activeOutlet === "payments"){
         API.get("payment/")
         .then(res => {
            console.log("response data for get request to payment",res.data)
            setPayments(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))

         API.get("customer/")
         .then(res => {
            console.log("response data for get request to customer",res.data)
            setCustomers(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))
      }
      else if (activeOutlet === "customers"){
         API.get("customer/")
         .then(res => {
            console.log("response data for get request to customer",res.data)
            setCustomers(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))
      }

   },[location.pathname])

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
      dashboard: [dashboard, setDashboard],
      products: [products, setProducts],
      payments: [payments, setPayments],
      orders: [orders, setOrders],
      customers: [customers, setCustomers],
   }

   return (
      <Panel menus={menus} url="/customer">
         <Outlet context={outletContex}/>
      </Panel>
   )
}
