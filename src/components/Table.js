import React from "react"

export default function Table(props) {

   return (
      <div className={props.config.shadow ? "shadow rounded-3 mb-5" : ""}>
         <div className="p-4">

            <table className="table table-borderless align-middle text-center m-0 p-0">

               <thead className={"bg-table-"+props.config.color}>
                  <tr>
                     <td>S</td>
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
                        <tr key={row.id} className="hover">
                           <td> {index + 1} </td>
                           {
                              row.data.map((rowData, index) => (
                                 <td key={index}> {rowData} </td>
                              ))
                           }
                           {
                              row.buttons.map((button, index) => (
                                 <td key={index}>
                                    <button id={row.id} className={button.class.join(" ")} value={button.value ? button.value : ""} onClick={props.callbacks[index]}> {button.text} </button>
                                 </td>
                              ))
                           }
                        </tr>
                     ))
                  }
               </tbody>

            </table>

         </div>
      </div>
   )
}
