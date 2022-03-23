import React, { useEffect, useState }     from "react"
import Dashboard from "../Dashboard"
import { useOutletContext } from "react-router-dom"

export default function SellerDashboard() {

   const {customers: [customers]} = useOutletContext()
   const {dashboard: [dashboard]} = useOutletContext()
   const [pendings, setPendings] = useState([])
   const [amountOverviews, setAmoutOverviews] = useState([])
   const [graphs, setGraphs] = useState([])


   useEffect(() => {
      setPendings(customers.splice(0,5).map(customer => (
         [customer.name, parseInt(customer.total-customer.paid)]
      )).sort((a, b) => (a[1] > b[1]) ? -1 : 1))
   },[customers])
   
   
   useEffect(() => {
      setAmoutOverviews([
         [
            "Total Sells",
            dashboard.total ? dashboard.total : 0,
         ],
         [
            "Amount Paid",
            dashboard.paid ? dashboard.paid : 0,
         ],
         [
            "Amount Due",
            parseInt(dashboard.total-dashboard.paid),
         ],
      ])
      if (dashboard.graph){
         setGraphs([
            dashboard.graph.map(item => new Date(item.datetime__date).toDateString()),
            dashboard.graph.map(item => item.total)
         ])
      }
   },[dashboard])

   const dashboardProps = {
      amountOverviews: amountOverviews,
      graphProps: {
         title: "Purchases",
         label: "Amount",
         labels: graphs[0],
         data: graphs[1],
      },
      pendings: pendings
   }

   return (
      <Dashboard {...dashboardProps}/>
   )
}
