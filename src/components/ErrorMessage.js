import React from "react"

export default function ErrorMessage(props) {
   return (
      <div className="d-flex flex-column align-items-center pt-3">
         <p> {props.message} </p>
      </div>
   )
}
