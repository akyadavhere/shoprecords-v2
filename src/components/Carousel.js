import React     from "react"
import Dashboard from "../images/dashboard.png"
import AddOrder  from "../images/addorder.png"
import Orders    from "../images/orders.png"

export default function Carousel() {
   return (
      <div className="d-flex flex-row align-items-stretch">

         <button className="carousel-control-prev position-relative bg-info" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <i className="bi bi-arrow-left text-primary" style={{"fontSize":"44px"}}></i>
            <span className="visually-hidden">Previous</span>
         </button>

      <div id="carouselExampleCaptions" className="carousel slide w-75 m-5" data-bs-ride="carousel">
         
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active d-none" aria-current="true" aria-label="Slide 1"></button>
            <button className="d-none" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className="d-none" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>

         <div className="carousel-inner">

            <div className="carousel-item active"data-bs-interval="2000">
               <img src={Dashboard} className="d-block w-100" alt=""/>
            </div>

            <div className="carousel-item"data-bs-interval="2000">
               <img src={AddOrder} className="d-block w-100" alt="..."/>
            </div>

            <div className="carousel-item"data-bs-interval="2000">
               <img src={Orders} className="d-block w-100" alt="..."/>
            </div>

         </div>

      </div>

         <button className="carousel-control-next position-relative bg-info" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <i className="bi bi-arrow-right text-primary" style={{"fontSize":"44px"}}></i>
            <span className="visually-hidden">Next</span>
         </button>

      </div>
   )
}
