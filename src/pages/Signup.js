import React, { useRef, useState} from "react"
import { useNavigate }   from "react-router-dom"
import API from "../api/base"
import Toast from "../components/Toast"
import { Toast as ToastClass } from "bootstrap"
import Spinner from "../components/Spinner"

export default function Signup() {

   const [toastMessage, setToastMessage] = useState("")
   const [isLoading, setIsLoading] = useState(false)
   const navigate = useNavigate()
   const signupForm = useRef()
   const toastRef = useRef()

   const handleSubmit = e => {
      setIsLoading(true)
		e.preventDefault()

      const user = {
         "name": e.target[0].value,
         "email": e.target[1].value,
         "password": e.target[2].value,
      }

      API.post("signup", user)
      .then(res => {
         console.log("response data for post request to signup",res.data)
         if (res.status === 200) {

            if (res.data.message) {
               setToastMessage("Signup successful. Please login")

            } else if (res.data.email) {
               setToastMessage("Email already exists")
            }
            console.log(isLoading)
            setIsLoading(false)
            var toast = new ToastClass(toastRef.current)
            toast.show()
         }
      })
      .catch(res => console.log("error in post request to signup",res))
      signupForm.current.reset()
	}

   return (
      isLoading ? <Spinner/> :

      <>

         <Toast toastRef={toastRef} message={toastMessage}/>
         
         <div className="d-flex flex-row align-items-center justify-content-center min-vh-100">
            
            <div className="d-flex flex-column align-items-center shadow p-5 rounded-3">

               <h1 className="mb-4 poppins fw-bold"> Sign up </h1>

               <form ref={signupForm} className="d-flex flex-column" onSubmit={handleSubmit} style={{"width":"220px"}}>
                  
                  <input className="form-control mb-4" required type="text" placeholder="Name"/>
                  
                  <input className="form-control mb-4" required type="email" placeholder="Email"/>
                  
                  <input className="form-control mb-4" required type="password" placeholder="Password"/>
                  
                  <input className="form-control btn-primary mb-4 text-white" type="submit" value="Sign up"/>
               
               </form>
               
               <button className="btn btn-link text-decoration-none" onClick={() => navigate("/login")}> Existing user ? </button>
            
            </div>
      
         </div>
      
      </>
   )
}
