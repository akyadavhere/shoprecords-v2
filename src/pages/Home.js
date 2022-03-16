import React            from "react"
import Cards            from "../components/Cards"
import Carousel         from "../components/Carousel"
import illustration     from "../images/illustration.jpg"
import { useNavigate }  from "react-router-dom"

export default function Home() {

   const navigate = useNavigate()

   return (
      <>
         <div className="bg-primary d-flex flex-row align-items-center justify-content-between shadow" style={{"height":"75px"}}>
            
            <h4 className="mb-0 ms-4 text-white" type="button" onClick={() => navigate("/")}> Shop Records </h4>          
            <div className="d-flex flex-row align-items-center me-4">

               <a href="https://github.com/akyadavhere/shoprecords-v2">
                  <i className="bi bi-github text-white me-3" style={{"fontSize":"28px"}}></i>
               </a>

               <button className="btn text-hover btn-sm btn-light me-3" onClick={() => navigate("/signup")}> Signup </button>
               <button className="btn text-hover btn-sm btn-light" onClick={() => navigate("/login")}> Login </button>             
            </div>

         </div>

         <div className="d-flex flex-row align-items-center justify-content-between m" style={{"minHeight":"calc(95vh - 75px"}}>
            
            <div className="text-center p-4">
               <h1 className="fw-bold" style={{"fontSize":"48px"}}> Now handle your shop records online </h1>
               <button className="btn btn-lg btn-primary rounded-pill mt-4" onClick={() => navigate("/signup")} style={{"width":"30%", "minWidth":"180px"}}> Get Started </button>
            </div>

            <div style={{"maxWidth":"50%"}}>
               <img src={illustration} className="img-fluid" alt="..."/>
            </div>

         </div>

         <div className="d-flex flex-column align-items-center mt-5 mb-0">
            <h2 className="fw-bold p-4">Screenshots</h2>
            <Carousel/>
         </div>

         <div className="d-flex flex-column align-items-center mb-5" style={{"marginTop":"60px"}}>
            <h2 className="fw-bold p-4">Contributers</h2>
            <Cards/>
         </div>

         <div className="d-flex flex-column align-items-center justify-content-center bg-dark" style={{"height":"85px"}}>
            <a className="text-light text-decoration-none m-1" href="https://www.freepik.com/vectors/business">Image source - www.freepik.com</a>
            <a className="text-light text-decoration-none m-1" href="https://github.com/akyadavhere/shoprecords-v2">Shoprecords-v2 on Github</a>
         
         </div>

      </>
   )
}
