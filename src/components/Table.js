import React from 'react'

export default function Table(props) {
   return (
      <div className='p-4'>
         <table className='table table-borderless align-middle text-center m-0 p-0'>
            <thead className={'table-'+props.data.class}>
               <tr>
                  <td>S No.</td>
                  {props.data.head.map((item,index) => (
                     <td key={index}>{item}</td>
                  ))}
                  {props.data.buttons?props.data.buttons.map((item,index) => (
                     <td key={index}>{item.head}</td>
                  )):null}
               </tr>
            </thead>
            <tbody>
               {props.data.rows.map((row,index) => (
                  <tr key={row.id} className={'hover-'+props.data.class}>
                     <td>{index+1}</td>
                     {row.data.map((item,index) => (
                        <td key={index}>{item}</td>
                     ))}
                     {props.data.buttons?props.data.buttons.map((item,index) => (
                        <td key={index}>
                           <button id={row.id} className={item.class} onClick={item.callbackFunc}>{item.name}</button>
                        </td>
                     )):null}
                  </tr>	
               ))}
            </tbody>
         </table>
      </div>
   )
}
