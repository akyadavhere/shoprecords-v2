import React from "react"
import { isMobile } from "react-device-detect"

export default function ErrorMessage(props) {
   return (
      <div className="d-flex flex-column align-items-center pt-3">
         <p> {props.message} </p>
         {
            (props.mobileMessage && isMobile) ? 
            <p style={{"fontSize":"10px"}}> ({props.mobileMessage}) </p>
            : null  
         }
      </div>
   )
}
