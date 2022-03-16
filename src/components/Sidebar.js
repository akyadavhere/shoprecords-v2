import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Sidebar(props) {

   const location = useLocation()
   const navigate = useNavigate()
   const [activeMenu, setActiveMenu] = useState()

   const additionalMenus = [
      ["Switch", "bi-toggle-on", props.url],
      ["Logout", "bi-arrow-left-circle-fill", "/login"]
   ]

   useEffect(() => {
      var pathArray = location.pathname.split("/")
      setActiveMenu(pathArray[pathArray.length-1])
   },
   [location.pathname])


   return (
      <div className="col position-fixed min-vh-100 right-shadow px-0" style={{"maxWidth":"300px"}}>

         <div className="d-flex flex-column align-items-center justify-content-center" style={{"height":"75px"}}>
            <h3 className="mb-0 mt-4"> Shop records </h3>
         </div>

         <ul className="list-group list-group-flush mt-4">
            {
               props.menuArray.map(([text, icon], index) => (
                  <li key={index} id={text.toLowerCase().replace(" ","")} type="button" className={"list-group-item border-0 py-3 " + (activeMenu === text.toLocaleLowerCase().replace(" ","") ? "text-primary bg-light" : "")} onClick={e => navigate(e.target.id)} style={{"paddingLeft":"60px"}}>
                     <i className={"bi me-3 "+ icon + (activeMenu === text.toLocaleLowerCase().replace(" ","") ? " text-primary" : "")}></i>
                     {text}
                  </li>
               ))
            }
            {
               additionalMenus.map(([text, icon, url], index) => (
                  <li key={index} className="list-group-item border-0 py-3" type="button" onClick={() => navigate(url)} style={{"paddingLeft":"60px"}}>
                     <i className={"bi me-3 " + icon}></i>
                     {text}
                  </li>
               ))
            }
         </ul>

      </div>
   )
}
