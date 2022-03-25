import React, { useEffect, useState } from "react"
import { useLocation, useNavigate }   from "react-router-dom"

export default function Sidebar(props) {

   const location = useLocation()
   const navigate = useNavigate()
   const [activeMenu, setActiveMenu] = useState()


   const additionalMenus = [
      [
         "Switch",
         "bi-toggle-on",
         () => navigate(props.url),
      ],
      [
         "Logout",
         "bi-arrow-left-circle-fill",
         () => {window.localStorage.clear(); navigate("/login")}
      ]
   ]

   useEffect(() => {
      var paths = location.pathname.split("/")
      setActiveMenu(paths[paths.length-1])
   },
   [location.pathname])


   return (
      <div className="col position-fixed min-vh-100 right-shadow px-0" style={{"maxWidth":"300px", "overflowY":"auto"}}>

         <div className="d-flex flex-column align-items-center justify-content-center" style={{"height":"75px"}}>
            <h3 className="mb-0 mt-4" type="button" onClick={() => navigate("/")}> Shop records </h3>
         </div>

         <ul className="list-group list-group-flush mt-4">
            {
               props.menus.map(([text, icon], index) => (
                  <li key={index} id={text.toLowerCase().replace(" ","")} type="button" className={"list-group-item border-0 py-3 " + (activeMenu === text.toLocaleLowerCase().replace(" ","") ? "text-primary bg-light" : "")} onClick={e => navigate(e.target.id)} style={{"paddingLeft":"60px"}}>
                     <i className={"bi me-3 "+ icon + (activeMenu === text.toLocaleLowerCase().replace(" ","") ? " text-primary" : "")}></i>
                     {text}
                  </li>
               ))
            }
            {
               additionalMenus.map(([text, icon, callback], index) => (
                  <li key={index} className="list-group-item border-0 py-3" type="button" onClick={callback} style={{"paddingLeft":"60px"}}>
                     <i className={"bi me-3 " + icon}></i>
                     {text}
                  </li>
               ))
            }
         </ul>

      </div>
   )
}
