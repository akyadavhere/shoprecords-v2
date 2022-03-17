import React from "react"
import Graph from "./Graph"

export default function Dashboard(props) {

   return (
      <>
         <div className="d-flex flex-row">
            {
               props.amountOverviews.map(([label, value], index) => (
                  <div key={index} className={"card border-0 flex-grow-1 shadow rounded-3 text-center " + (index !== 0 ?"ms-5" : "")}>
                     <div className="card-body">
                        <h5 className="card-title text-primary ms-2 mb-0" style={{"display":"inline-block"}}> Rs. {value} </h5>
                        <p className="card-text"> {label} </p>
                     </div>
                  </div>
               ))
            }
         </div>

         <div className="d-flex flex-row mt-5 align-items-start">

            <Graph {...props.graphProps}/>

            <div className="flex-grow-1 shadow rounded-3 ms-5">
               <h6 className="text-center mb-0 mt-4"> Pendings </h6>

               <ul className="list-group list-group-flush text-center p-4">
                  {
                     props.pendings.map(([name, value], index) => (
                        <li key={index} className="list-group-item d-flex flex-row justify-content-between py-3">
                           <span className=""> {name} </span>
                           <span className="text-secondary"> Rs. {value} </span>
                        </li>
                     ))
                  }
               </ul>

            </div>
         </div>
      </>
   )
}
