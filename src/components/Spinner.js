import React from 'react'

export default function Spinner() {
   return (
      <div className="d-flex flex-row align-items-center justify-content-center min-vh-100">
         <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
      </div>
   )
}
