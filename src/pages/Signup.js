import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup() {
   const navigate = useNavigate()
   const form = useRef()

   const handleSubmit = e => {
		e.preventDefault()
		console.log(e.target[0].value,e.target[1].value,e.target[2].value)
      form.current.reset()
	}

   return (
      <div className="d-flex flex-row align-items-center justify-content-center min-vh-100">
         <div className="d-flex flex-column align-items-center shadow bg-white p-5 rounded-3">
            <h1 className="mb-4 poppins fw-bold">Sign up</h1>
            <form ref={form} className="d-flex flex-column" onSubmit={handleSubmit} style={{"width":"220px"}}>
               <input className="form-control mb-4" required type="text" placeholder="Name"/>
               <input className="form-control mb-4" required type="email" placeholder="Email"/>
               <input className="form-control mb-4" required type="password" placeholder="Password"/>
               <input className="form-control btn-primary mb-4 text-white" type="submit" value="Sign up"/>
            </form>
            <button className="btn btn-link text-decoration-none" onClick={() => navigate("/login")}>Existing user ?</button>
         </div>
      </div>
   )
}
