import React,{ useState } from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
}                   from "react-router-dom"
import Login        from "./pages/Login"
import Signup       from "./pages/Signup"
import Customer     from "./pages/Customer"
import Seller       from "./pages/Seller"

import CustomerDashboard    from "./components/customer/CustomerDashboard"
import CustomerOrders    from "./components/customer/CustomerOrders"

import SellerDashboard    from "./components/seller/SellerDashboard"
import SellerOrders    from "./components/seller/SellerOrders"
import AddOrder from "./components/seller/AddOrder"
import Products from "./components/seller/Products"


import ErrorMessage from "./components/ErrorMessage"

export default function App() {

	const requiredWidth = "(min-width: 920px)"
	const [isRequiredWidth, setIsRequiredWidth] = useState(window.matchMedia(requiredWidth).matches)
	window.addEventListener("resize",() => setIsRequiredWidth(window.matchMedia(requiredWidth).matches))

  	return (
		isRequiredWidth?
	 	<Router>
			<Routes>
				<Route exact path="/" element={<Navigate replace to="login"/>}/>
				<Route       path="/">

					<Route path="login"  element={<Login/>}/>
					<Route path="signup" element={<Signup/>}/>

					<Route exact path="customer" element={<Navigate replace to="dashboard"/>}/>
					<Route       path="customer" element={<Customer/>}>

						<Route path="dashboard" element={<CustomerDashboard/>}/>
						<Route path="orders"    element={<CustomerOrders/>}/>
						{/* <Route path="payments"  element={<Payments/>}/> */}
						{/* <Route path="sellers"   element={<ListRelated/>}/> */}

					</Route>

					<Route exact path="seller" element={<Navigate replace to="dashboard"/>}/>
					<Route       path="seller" element={<Seller/>}>
						
						<Route path="dashboard" element={<SellerDashboard/>}/>
						<Route path="addorder"  element={<AddOrder/>}/>
						<Route path="orders"    element={<SellerOrders/>}/>
						{/* <Route path="payments"  element={<Payments/>}/> */}
						{/* <Route path="customers" element={<ListRelated/>}/> */}
						<Route path="products"  element={<Products/>}/>

					</Route>

					<Route path="*" element={<ErrorMessage message="404 Page not found"/>}/>

				</Route>
			</Routes>
		</Router>
		: <ErrorMessage message="Your screen size is not supported"/>
  	)
}
