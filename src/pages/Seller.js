import React      from "react"
import { Outlet } from "react-router-dom"
import Panel      from "../components/Panel"

export default function Seller() {

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

   return (
      <Panel menus={menus} url="/customer">
         <Outlet/>
      </Panel>
   )
}
