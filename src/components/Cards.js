import React  from "react"
import Person from "../images/person.jpg"

export default function Cards() {
   return (
      <div className="d-flex flex-row align-item-center justify-content-evenly w-100 my-5">

         <div className="card border-0" style={{"width": "10rem"}}>
            <img src={Person} className="card-img-top rounded-circle" alt=""/>
            <div className="card-body text-center">
               <h5 className="card-title"> Name </h5>
               <p className="card-text"> More information </p>
            </div>
         </div>

         <div className="card border-0" style={{"width": "10rem"}}>
            <img src={Person} className="card-img-top rounded-circle" alt=""/>
            <div className="card-body text-center">
               <h5 className="card-title"> Name </h5>
               <p className="card-text"> More information </p>
            </div>
         </div>

         <div className="card border-0" style={{"width": "10rem"}}>
            <img src={Person} className="card-img-top rounded-circle" alt=""/>
            <div className="card-body text-center">
               <h5 className="card-title"> Name </h5>
               <p className="card-text"> More information </p>
            </div>
         </div>

         <div className="card border-0" style={{"width": "10rem"}}>
            <img src={Person} className="card-img-top rounded-circle" alt=""/>
            <div className="card-body text-center">
               <h5 className="card-title">Name</h5>
               <p className="card-text">More information</p>
            </div>
         </div>

      </div>
   )
}
