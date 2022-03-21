import React from 'react'

export default function Toast(props) {

   return (
      <div ref={props.toastRef} className="toast align-items-center border-0 position-fixed bottom-0 end-0 m-5" role="alert" aria-live="assertive" aria-atomic="true">
         <div className="d-flex">
            <div className="toast-body text-primary">
            {props.message}
            </div>
            <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
         </div>
      </div>
   )
}
