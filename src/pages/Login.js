import React, { useRef } from "react"
import { useNavigate }   from "react-router-dom"
import API from "../api/base"

export default function Login() {
   
   const navigate = useNavigate()
   const loginForm = useRef()

   const handleSubmit = e => {
		e.preventDefault()
		console.log(
         [
            e.target[0].value,
            e.target[1].value
         ]
      )

      var user = {
         "email": e.target[0].value,
         "password": e.target[1].value,
      }

      API.post("token", user)
      .then(res => console.log(res))

      loginForm.current.reset()
	}

  return (
      <div className="d-flex flex-row align-items-center justify-content-center min-vh-100">
         <div className="d-flex flex-column align-items-center shadow p-5 rounded-3">

            <h1 className="mb-4 poppins fw-bold"> Login </h1>

            <form ref={loginForm} className="d-flex flex-column" onSubmit={handleSubmit} style={{"width":"220px"}}>
               
               <input className="form-control mb-4" required type="email" placeholder="Email"/>
               
               <input className="form-control mb-4" required type="password" placeholder="Password"/>
               
               <input className="form-control btn-primary text-white mb-4" type="submit" value="Login"/>
            
            </form>

            <button className="btn btn-link text-decoration-none" onClick={() => navigate("/signup")}> New user ? </button>
         </div>
      </div>
   )
}
