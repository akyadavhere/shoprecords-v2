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
import Dashboard    from "./subpages/Dashboard"
import Orders       from "./subpages/Orders"
import AddOrder     from "./subpages/AddOrder"
import Products     from "./subpages/Products"
import Payments     from "./subpages/Payments"
import ListRelated  from "./subpages/ListRelated"
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

						<Route path="dashboard" element={<Dashboard/>}/>
						<Route path="orders"    element={<Orders/>}/>
						<Route path="payments"  element={<Payments/>}/>
						<Route path="sellers"   element={<ListRelated/>}/>

					</Route>

					<Route exact path="seller" element={<Navigate replace to="dashboard"/>}/>
					<Route       path="seller" element={<Seller/>}>
						
						<Route path="dashboard" element={<Dashboard/>}/>
						<Route path="addorder"  element={<AddOrder/>}/>
						<Route path="orders"    element={<Orders/>}/>
						<Route path="payments"  element={<Payments/>}/>
						<Route path="customers" element={<ListRelated/>}/>
						<Route path="products"  element={<Products/>}/>

					</Route>

					<Route path="*" element={<ErrorMessage message="404 Page not found"/>}/>

				</Route>
			</Routes>
		</Router>
		: <ErrorMessage message="Your screen size is not supported"/>
  	)
}
