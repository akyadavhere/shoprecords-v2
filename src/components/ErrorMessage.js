import React from "react"
import { isMobile } from "react-device-detect"

export default function ErrorMessage(props) {
   return (
      <div className="d-flex flex-row justify-content-center pt-3">
         <p> {props.message} </p>
         {
            (props.mobileMessage && isMobile) ? 
            <p> {props.mobileMessage} </p>
            : null  
         }
      </div>
   )
}
