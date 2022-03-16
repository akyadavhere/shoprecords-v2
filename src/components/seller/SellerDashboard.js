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
         labels: ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct"],
         data: [8,4,6,5,7,8,5,3,6,7],
      },
      pendings: [
         [
            "Rohan Yadav",
            "120"
         ],
         [
            "Rohan Yadav",
            "120"
         ],
         [
            "Rohan Yadav",
            "120"
         ],
         [
            "Rohan Yadav",
            "120"
         ],
      ]
   }

   return (
      <Dashboard {...dashboardProps}/>
   )
}
