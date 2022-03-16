import React,{ useEffect, useState } from "react"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
}              from "chart.js"
import { Line} from "react-chartjs-2"

export default function Graph(props) {

	const [color,setColor] = useState("")

	useEffect(()=>{

		var ctx = document.getElementById("graphCanvas").getContext("2d")

		var fillColor = ctx.createLinearGradient(0,0,0,500)
		fillColor.addColorStop(0, "rgba(98, 0, 238, 0.4)")  
		fillColor.addColorStop(1, "rgba(253, 247, 255, 0.2)")

		setColor(fillColor)
	},[])

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend,
		Filler
	)

	const options = {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				display: false,
			}
		},
		scales: {
			x: {
				grid: {
					display: false
				},
				ticks: {
					display: false,
					maxRotation: 90,
					minRotation: 0
			}
			},
			y: {
				grid: {
					display: false
				},
				ticks: {
					display: false,
				} 
			}         
		}
	}

	const data = {
		labels: props.labels,
		datasets: [
			{
				label: props.label,
				data: props.data,
				borderColor: "#6300EE",
				backgroundColor: color,
				tension: 0.3,
				borderWidth: 1.5,
				pointRadius: 2,
				fill: true,
			}
		]
	}

	return (
		<div className="shadow p-4 rounded-3" style={{"width":"65.75%"}}>
			<h6 className="text-center mb-4"> {props.title} </h6>			
			<Line id="graphCanvas" options={options} data={data}/>      
		</div>
	)
}

