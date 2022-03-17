import React   from "react"
import Sidebar from "./Sidebar"

export default function Panel(props) {

   return (
      <div className="row me-0">
         <div className="col px-0" style={{ "maxWidth":"300px" }}> </div>

         <Sidebar menus={props.menus} url={props.url}/>
        
         <div className="col border-thick px-0">
            <div className="mx-5 my-5">
               {props.children}
            </div>
         </div>
      </div>

   )
}
