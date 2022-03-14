import React from "react"
import { Outlet } from "react-router-dom"
import Panel from "../components/Panel"

export default function Customer() {

   const menuArray = [
      ["Dashboard","bi-grid-fill"],
      ["Orders","bi-cart-fill"],
      ["Payments","bi-credit-card-fill"],
      ["Sellers","bi-person-fill"],
   ]

  return (
      <Panel menuArray={menuArray} switchURL="/seller">
         <Outlet/>
      </Panel>
   )
}
