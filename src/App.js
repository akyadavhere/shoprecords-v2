import React,{ useState } from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
}                         from "react-router-dom"
import Login              from "./pages/Login"
import Signup             from "./pages/Signup"
import Customer           from "./pages/Customer"
import Seller             from "./pages/Seller"

import CustomerDashboard  from "./components/customer/CustomerDashboard"
import CustomerOrders     from "./components/customer/CustomerOrders"
import CustomerPayments   from "./components/customer/CustomerPayments"
import AllSeller          from "./components/customer/AllSeller"
import AllCustomer        from "./components/seller/AllCustomer"

import SellerDashboard    from "./components/seller/SellerDashboard"
import SellerOrders       from "./components/seller/SellerOrders"
import AddOrder           from "./components/seller/AddOrder"
import Products           from "./components/seller/Products"
import SellerPayments     from "./components/seller/SellerPayments"

import Root from "./pages/Root"
import Home from "./pages/Home"
import ErrorMessage from "./components/ErrorMessage"

export default function App() {
	
	const requiredWidth = `(min-width: ${process.env.REACT_APP_VIEW_ON_MOBILE === "1" ? 960 : 1200}px)`
	const [isRequiredWidth, setIsRequiredWidth] = useState(window.matchMedia(requiredWidth).matches)
	window.addEventListener("resize",() => setIsRequiredWidth(window.matchMedia(requiredWidth).matches))

  	return (
		isRequiredWidth?
	 	<Router>
			<Routes>
				<Route exact path="/" element={<Navigate replace to="home"/>}/>
				<Route       path="/" element={<Root/>}>

					<Route path="home"  element={<Home/>}/>
					<Route path="login"  element={<Login/>}/>
					<Route path="signup" element={<Signup/>}/>

					<Route exact path="customer" element={<Navigate replace to="dashboard"/>}/>
					<Route       path="customer" element={<Customer/>}>

						<Route path="dashboard" element={<CustomerDashboard/>}/>
						<Route path="orders"    element={<CustomerOrders/>}/>
						<Route path="payments"  element={<CustomerPayments/>}/>
						<Route path="sellers"   element={<AllSeller/>}/>

					</Route>

					<Route exact path="seller" element={<Navigate replace to="dashboard"/>}/>
					<Route       path="seller" element={<Seller/>}>
						
						<Route path="dashboard" element={<SellerDashboard/>}/>
						<Route path="addorder"  element={<AddOrder/>}/>
						<Route path="orders"    element={<SellerOrders/>}/>
						<Route path="payments"  element={<SellerPayments/>}/>
						<Route path="customers" element={<AllCustomer/>}/>
						<Route path="products"  element={<Products/>}/>

					</Route>

					<Route path="*" element={<ErrorMessage message="404 Page not found"/>}/>

				</Route>
			</Routes>
		</Router>
		: <ErrorMessage message="Your screen size is not supported"/>
  	)
}
