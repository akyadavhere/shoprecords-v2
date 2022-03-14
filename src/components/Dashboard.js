import React from 'react'
import Graph from './Graph'

export default function Dashboard() {

   const amountDataArray = [
      ['Total Purchase', '5000'],
      ['Amount Paid', '2800'],
      ['Amount Due', '2200'],
   ]

   const graphProps = {
      label: 'Amount',
      labels: ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct'],
      data: [8,4,6,5,7,8,5,3,6,7],
    }

   const data = [
      ['Sonu Singh','200'],
      ['Sonu Singh','200'],
      ['Sonu Singh','200'],
      ['Sonu Singh','200'],
      ['Sonu Singh','200'],
   ]

   return (
      <>
      <div className='d-flex flex-row'>
         {amountDataArray.map(([label,value],index) => (
            <div key={index} className={'card border-0 flex-grow-1 shadow rounded-3 text-center '+(index===0?'':'ms-5')}>
               <div className='card-body'>
                  <h5 className='card-title ms-2 mb-0 text-primary' style={{'display':'inline-block'}}>Rs. {value}</h5>
                  <p className='card-text'>{label}</p>
               </div>
            </div>
         ))}
      </div>

      <div className='d-flex flex-row mt-5'>
         <div className='shadow bg-white p-4 rounded-3' style={{'width':'65.75%'}}>
            <h6 className='text-center mb-4'>Purchases</h6>
            <Graph {...graphProps}/>
         </div>

         <div className='ms-5 flex-grow-1 bg-white shadow rounded-3'>
            <h6 className='text-center mb-0 mt-4'>Pendings</h6>
            <ul className='list-group list-group-flush p-4 text-center'>
               {data.map(([name,value],index) => (
                  <li key={index} className='list-group-item py-3 d-flex flex-row justify-content-between'>
                     <span className=''>{name}</span>
                     <span className='text-secondary'>Rs. {value}</span>
                  </li>
               ))}
             </ul>
         </div>
      </div>
      </>
   )
}
