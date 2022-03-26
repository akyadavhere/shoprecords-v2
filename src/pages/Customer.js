import React, { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate, useOutletContext } from "react-router-dom"
import Panel      from "../components/Panel"
import API from "../api/base"

export default function Customer() {

   const [isLogin] = useOutletContext()
   const location = useLocation()
   const [dashboard, setDashboard] = useState([])
   const [orders, setOrders] = useState([])
   const [payments, setPayments] = useState([])
   const [sellers, setSellers] = useState([])
   const navigate = useNavigate()

   // API.defaults.baseURL = "http://localhost:8000/api/customer/"

   useEffect(() => {
      if (! isLogin) {
         navigate("/login")
      } 
      else{

         const activeOutlet = location.pathname.split("/")[location.pathname.split("/").length-1]
         
         if (activeOutlet === "dashboard"){
            
            API.get("customer/dashboard")
            .then(res => {
               console.log("response data for get request to customerdashboard",res.data)
               setDashboard(res.data)
            })
            .catch(res => console.log("error in get request to customerdashboard",res))

            API.get("customer/seller")
            .then(res => {
               console.log("response data for get request to seller",res.data)
               setSellers(res.data)
            })
            .catch(res => console.log("error in get request to seller",res))
         }
         else if (activeOutlet === "orders"){
            API.get("customer/order")
            .then(res => {
               console.log("response data for get request to customerorder",res.data)
               setOrders(res.data)
            })
            .catch(res => console.log("error in get request to customerorder",res))
         }
         else if (activeOutlet === "payments"){
            API.get("customer/payment")
            .then(res => {
               console.log("response data for get request to customerpayment",res.data)
               setPayments(res.data)
            })
            .catch(res => console.log("error in get request to customerpayment",res))
         }
         else if (activeOutlet === "sellers"){
            API.get("customer/seller")
            .then(res => {
               console.log("response data for get request to seller",res.data)
               setSellers(res.data)
            })
            .catch(res => console.log("error in get request to seller",res))
         }
      }
   },[location.pathname, navigate, isLogin])


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
