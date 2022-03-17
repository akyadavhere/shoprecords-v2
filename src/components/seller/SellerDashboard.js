import React     from "react"
import Dashboard from "../Dashboard"

export default function SellerDashboard() {

   const dashboardProps = {
      amountOverviews: [
         [
            "Total Purchase",
            "5000",
         ],
         [
            "Amount Paid",
            "2800",
         ],
         [
            "Amount Due",
            "2200",
         ],
      ],
      graphProps: {
         title: "Purchases",
         label: "Amount",
         labels: ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],
         data: [5,6,4,7,3,8,2,9,4,8,5,8],
      },
      pendings: [
         [
            "Diana",
            "780"
         ],
         [
            "Emma",
            "440"
         ],
         [
            "Jenni",
            "950"
         ],
         [
            "Kathlin",
            "1220"
         ],
         [
            "Lauren",
            "1280"
         ],
      ]
   }

   return (
      <Dashboard {...dashboardProps}/>
   )
}
