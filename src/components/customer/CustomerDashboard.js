import React, { useEffect, useState }     from "react"
import Dashboard from "../Dashboard"
import { useOutletContext } from "react-router-dom"

export default function CustomerDashboard() {

   const {dashboard: [dashboard]} = useOutletContext()
   const {sellers: [sellers]} = useOutletContext()
   const [pendings, setPendings] = useState([])
   const [amountOverviews, setAmoutOverviews] = useState([])
   const [graphs, setGraphs] = useState([])


   useEffect(() => {
      setPendings(sellers.splice(0,5).map(seller => (
         [seller.name, parseInt(seller.total-seller.paid)]
      )).sort((a, b) => (a[1] > b[1]) ? -1 : 1))
   },[sellers])
   
   
   useEffect(() => {
      setAmoutOverviews([
         [
            "Total Purchase",
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

