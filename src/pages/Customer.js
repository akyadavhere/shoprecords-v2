import React, { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Panel      from "../components/Panel"
import API from "../api/base"

export default function Customer() {

   const location = useLocation()
   const [dashboard, setDashboard] = useState([])
   const [orders, setOrders] = useState([])
   const [payments, setPayments] = useState([])
   const [sellers, setSellers] = useState([])


   useEffect(() => {
      const activeOutlet = location.pathname.split("/")[location.pathname.split("/").length-1]
      
      if (activeOutlet === "dashboard"){
         API.get("customerdashboard/")
         .then(res => {
            console.log("response data for get request to customerdashboard",res.data)
            setDashboard(res.data)
         })
         .catch(res => console.log("error in get request to customerdashboard",res))

         API.get("seller/")
         .then(res => {
            console.log("response data for get request to customer",res.data)
            setSellers(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))
      }
      else if (activeOutlet === "orders"){
         API.get("customerorder/")
         .then(res => {
            console.log("response data for get request to customerorder",res.data)
            setOrders(res.data)
         })
         .catch(res => console.log("error in get request to customerorder",res))
      }
      else if (activeOutlet === "payments"){
         API.get("customerpayment/")
         .then(res => {
            console.log("response data for get request to payment",res.data)
            setPayments(res.data)
         })
         .catch(res => console.log("error in get request to dashboard",res))
      }
      else if (activeOutlet === "sellers"){
         API.get("seller/")
         .then(res => {
            console.log("response data for get request to customer",res.data)
            setSellers(res.data)
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
         "Orders",
         "bi-cart-fill",
      ],
      [
         "Payments",
         "bi-credit-card-fill",
      ],
      [
         "Sellers",
         "bi-person-fill",
      ],
   ]

   const outletContext = {
      dashboard: [dashboard, setDashboard],
      orders: [orders, setOrders],
      payments: [payments, setPayments],
      sellers: [sellers, setSellers],
   }

  return (
      <Panel menus={menus} url="/seller">
         <Outlet context={outletContext}/>
      </Panel>
   )
}
