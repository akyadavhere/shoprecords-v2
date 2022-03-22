import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function Root() {
	const location = useLocation()
	useEffect(() => {
		console.log("runallttttt")
	},[location.pathname])
   return (
      <Outlet/>
   )
}
