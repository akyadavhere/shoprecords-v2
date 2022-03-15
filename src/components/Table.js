import React from "react"

export default function Table(props) {

   return (
      <div className="p-4">
         <table className="table table-borderless align-middle text-center m-0 p-0">

            <thead className={props.config.headClass}>
               <tr>
                  <td>S No.</td>
                  {
                     props.head.map((columnHead, index) => (
                        <td key={index}> {columnHead} </td>
                     ))
                  }
               </tr>
            </thead>

            <tbody>
               {
                  props.body.map((row, index) => (
                     <tr key={row.id} className={props.config.hoverClass}>
                        <td> {index + 1} </td>
                        {
                           row.data.map((rowData, index) => (
                              <td key={index}> {rowData} </td>
                           ))
                        }
                        {
                           row.buttons.map((button, index) => (
                              <td key={index}>
                                 <button id={row.id} className={button.class.join(" ")} onClick={props.callbacks[index]}> {button.text} </button>
                              </td>
                           ))
                        }
                     </tr>
                  ))
               }
            </tbody>

         </table>
      </div>
   )
}
