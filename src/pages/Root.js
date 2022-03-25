import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
   const [isLogin, setIsLogin] = useState(localStorage.getItem("loggedin") === "true")

   return (
      <Outlet context={[isLogin, setIsLogin]}/>
   )
}
