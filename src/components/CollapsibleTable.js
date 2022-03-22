import React, { Fragment, useEffect, useState } from "react"

export default function CollapsibleTable(props) {

	const [collapse, setCollapse] = useState([])

	const handleCollapse = e => {
		console.log(collapse)
		setCollapse(collapse.map(item => {
			if (item.id === e.target.id) {
				item.show = !item.show
			} return item
		}))
		console.log(collapse)
	}

	useEffect(() => {
		var temp = props.body.map(row => ({
			id: props.name+row.id,
			show: false,
		}))
		setCollapse(temp)
		console.log(temp)
		console.log(collapse)

	},[props.body])


 	return (
		<div className="shadow rounded-3">
			<div className="p-4">

				<table className="table table-borderless align-middle text-center m-0 p-0">

					<thead className={"bg-table-"+props.config.color}>
						<tr>
							<td>S</td>
							{
								props.head.map((columnHead, index) => (
									<td key={index}> {columnHead} </td>
								))
							}
							<td>Expand</td>
						</tr>
					</thead>

					<tbody>
						{
							props.body.map((row, index) => (
								<Fragment key={row.id}>
									<tr className="hover">
										<td> {index + 1} </td>
										{
											row.data.map((rowData, index) => (
												<td key={index}> {rowData} </td>
											))
										}
										{
											row.buttons.map((button, index) => (
												<td key={index}>
													<button id={row.id} className={button.class.join(" ")} value={button.value ? button.value : ""} onClick={props.callbacks[index]}> {button.text} </button>
												</td>
											))
										}
										<td>
											<button id={props.name+row.id} className="btn btn-sm btn-link text-primary text-decoration-none" onClick={handleCollapse}> Show </button>
										</td>
									</tr>				

									<tr>
										<td colSpan="10" className="p-0">
											<div id={props.name+row.id} className={"expandible "+(collapse.length > 0 ? (collapse.filter(item => item.id == props.name+row.id)[0].show ? "show" : "") :"")}>
												{row.child}
											</div>
										</td>
									</tr>
								</Fragment>
							))
						}
					</tbody>

				</table>
			</div>
		</div>
  	)
}
