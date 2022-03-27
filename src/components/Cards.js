import React  from "react"
import Person from "../images/person.jpg"
import Shushant from "../images/shushant.png"

export default function Cards() {
   return (
      <div className="d-flex flex-row align-item-center justify-content-evenly w-100 my-5">

         <div className="card border-0" style={{"width": "10rem"}}>
            <img src={Person} className="card-img-top rounded-circle" alt=""/>
            <div className="card-body text-center">
               <h5 className="card-title fw-bold"> Amar Kant Yadav </h5>
               <p className="card-text"> Student of K.V Chittaranjan class XII 'A' </p>
            </div>
         </div>

         <div className="card border-0" style={{"width": "10rem"}}>
            <img src={Person} className="card-img-top rounded-circle" alt=""/>
            <div className="card-body text-center">
               <h5 className="card-title fw-bold"> Chandan Kumar </h5>
               <p className="card-text"> Student of K.V Chittaranjan class XII 'A' </p>
            </div>
         </div>

         <div className="card border-0" style={{"width": "10rem"}}>
            <img src={Person} className="card-img-top rounded-circle" alt=""/>
            <div className="card-body text-center">
               <h5 className="card-title fw-bold"> Debanka Nag </h5>
               <p className="card-text"> Student of K.V Chittaranjan class XII 'A' </p>
            </div>
         </div>

         <div className="card border-0" style={{"width": "10rem"}}>
            <img src={Shushant} className="card-img-top rounded-circle" alt="" style={{"backgroundColor":"#E3E3E3"}}/>
            <div className="card-body text-center">
               <h5 className="card-title fw-bold"> Shushant Kumar </h5>
               <p className="card-text"> Student of K.V Chittaranjan class XII 'A' </p>
            </div>
         </div>

      </div>
   )
}
