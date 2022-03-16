import React, { Fragment } from "react"

export default function CollTable(props) {

 	return (
		<div className="shadow rounded-3">
			<div className="p-4">

				<table className="table table-borderless align-middle text-center m-0 p-0">

					<thead className={props.config.headClass}>
						<tr>
							<td>S No.</td>
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
									<tr className={props.config.hoverClass}>
										<td> {index + 1} </td>
										{
											row.data.map((rowData, index) => (
												<td key={index}> {rowData} </td>
											))
										}
										{
											row.buttons.map((button, index) => (
												<td key={index}>
													<button id={row.id} className={button.class.join(" ")} onClick={props.callbacks[index]}> {button.text} </button>
												</td>
											))
										}
										<td>
											<button className="btn btn-sm btn-link text-primary text-decoration-none" data-bs-toggle="collapse" data-bs-target={"#"+props.name+row.id}> Show </button>
										</td>
									</tr>				

									<tr>
										<td colSpan="10" className="p-0">
											<div id={props.name+row.id} className="collapse">
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
