import React, { useEffect, useRef, useState } from "react"
import { useNavigate }   from "react-router-dom"
import API from "../api/base"
import Spinner from "../components/Spinner"
import Toast from "../components/Toast"
import { Toast as ToastClass } from "bootstrap"

export default function Login() {
   
   const [isLoading, setIsLoading] = useState(true)
   const navigate = useNavigate()
   const loginForm = useRef()
   const toastRef = useRef()

   
   useEffect(() => {
      const token = window.localStorage.getItem("token")

      if (token) {
         var data = {
            "token": JSON.parse(token).access
         }

         API.post("verify/", data)
         .then(res => {
            if (res.status === 200) {
               setTimeout(() => {
                  setIsLoading(false)
                  navigate("/seller")
               }, 500);
            }
         }).catch(res => console.log("error in post request to verify",res))

      } else {
         setIsLoading(false)
      }

   },[navigate])


   const handleSubmit = e => {

		e.preventDefault()

      var user = {
         "email": e.target[0].value,
         "password": e.target[1].value,
      }

      API.post("token/", user)
      .then(res => {
         console.log("response data for post request to token",res.data)
         if (res.status === 200) {
            window.localStorage.setItem("token",JSON.stringify(res.data))
            API.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(window.localStorage.getItem("token")).access}`

            navigate("/seller")
         }
      }).catch(res => {
         console.log("error in post request to token",res)
         var toast = new ToastClass(toastRef.current)
         toast.show()
      })

      loginForm.current.reset()
	}

  return (
      isLoading ? <Spinner/> :

      <>

         <Toast toastRef={toastRef} message="Bad credentials"/>

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

      </>
   )
}
