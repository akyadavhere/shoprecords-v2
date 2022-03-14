import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Customer from './pages/Customer'
import Dashboard from './components/Dashboard'
import Seller from './pages/Seller'
import Orders from './components/Orders'
import AddOrder from './components/AddOrder'
import Products from './components/Products'
import PageNotFound from './components/PageNotFound'
import ScreenNotSupported from './components/ScreenNotSupported'
import { useState } from 'react'

export default function App() {

	const requiredWidth = "(min-width: 768px)"
	const [isRequiredWidth, setIsRequiredWidth] = useState(window.matchMedia(requiredWidth).matches)
	window.addEventListener('resize',() => setIsRequiredWidth(window.matchMedia(requiredWidth).matches))

  	return (
		isRequiredWidth?
	 	<Router>
			<Routes>
					<Route exact path='/' element={<Navigate replace to='login'/>}/>
					<Route path='/'>
						<Route path='login' element={<Login/>}/>
						<Route path='signup' element={<Signup/>}/>
						<Route exact path='customer' element={<Navigate replace to='dashboard'/>}/>
						<Route path='customer' element={<Customer/>}>
							<Route path='dashboard' element={<Dashboard/>}/>
							<Route path='orders' element={<Orders/>}/>
							<Route path='payments' element={<p>Payments</p>}/>
							<Route path='sellers' element={<p>Sellers</p>}/>
						</Route>
						<Route exact path='seller' element={<Navigate replace to='dashboard'/>}/>
						<Route path='seller' element={<Seller/>}>
							<Route path='dashboard' element={<Dashboard/>}/>
							<Route path='addorder' element={<AddOrder/>}/>
							<Route path='orders' element={<Orders/>}/>
							<Route path='payments' element={<p>Payments</p>}/>
							<Route path='customers' element={<p>Customers</p>}/>
							<Route path='products' element={<Products/>}/>
						</Route>
						<Route path='*' element={<PageNotFound/>}/>
					</Route>
			</Routes>
		</Router>:<ScreenNotSupported/>
  	)
}
