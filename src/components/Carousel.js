import React     from "react"
import Dashboard from "../images/dashboard.png"
import AddOrder  from "../images/addorder.png"
import Orders    from "../images/orders.png"

export default function Carousel() {
   return (
      <div id="carouselExampleCaptions" className="carousel slide w-75 m-5" data-bs-ride="carousel">
         
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active d-none" aria-current="true" aria-label="Slide 1"></button>
            <button className="d-none" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className="d-none" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>

         <div className="carousel-inner">

            <div className="carousel-item active">
               <img src={Dashboard} className="d-block w-100" alt=""/>
            </div>

            <div className="carousel-item">
               <img src={AddOrder} className="d-block w-100" alt="..."/>
            </div>

            <div className="carousel-item">
               <img src={Orders} className="d-block w-100" alt="..."/>
            </div>

         </div>

         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
         </button>

         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>

      </div>
   )
}
