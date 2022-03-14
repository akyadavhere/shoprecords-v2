import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Panel(props) {

   const location = useLocation()
   const navigate = useNavigate()
   const [activeMenu, setActiveMenu] = useState()

   useEffect(() => {
      var pathArray = location.pathname.split('/')
      setActiveMenu(pathArray[pathArray.length-1])
   },[location.pathname])

   return (
      <div className='row min-vh-100 me-0'>
         <div className='col px-0 min-vh-100' style={{'maxWidth':'300px'}}></div>
         <div className='col bg-white shadow px-0 min-vh-100 position-fixed' style={{'maxWidth':'300px'}}>
            <div className='d-flex flex-column align-items-center justify-content-center' style={{'height':'75px'}}>
               <h3 className='mb-0 mt-4'>Shop records</h3>
            </div>
            <div>
               <ul className='list-group list-group-flush mt-4'>
                  {props.menuArray.map(([item,icon],index) => (
                     <li key={index} id={item.toLowerCase().replace(' ','')} className={'list-group-item border-0 py-3 '+(activeMenu===item.toLocaleLowerCase().replace(' ','')?'text-primary bg-light':'')} type='button' onClick={e => navigate(e.target.id)} style={{'paddingLeft':'60px'}}>
                        <i className={'bi me-3 '+icon+(activeMenu===item.toLocaleLowerCase().replace(' ','')?' text-primary':'')}></i>
                        {item}
                     </li>
                  ))}
                  <li className='list-group-item border-0 py-3' type='button' onClick={() => navigate(props.switchURL)} style={{'paddingLeft':'60px'}}>
                     <i className='bi me-3 bi-toggle-on'></i>
                     Switch
                  </li>
                  <li className='list-group-item border-0 py-3' type='button' onClick={() => navigate('/login')} style={{'paddingLeft':'60px'}}>
                     <i className='bi me-3 bi-arrow-left-circle-fill'></i>
                     Logout
                  </li>
               </ul>
            </div>
         </div>
         <div className='col px-0 border border-primary border-start-0 border-end-0 border-bottom-0'>
            <div className='mx-5 my-5'>
               {props.children}
            </div>
         </div>
      </div>
   )
}
