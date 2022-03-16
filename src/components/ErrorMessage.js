import React from "react"

export default function ErrorMessage(props) {
   return (
      <div className="d-flex flex-row justify-content-center pt-3">
         <p> {props.message} </p>
      </div>
   )
}
