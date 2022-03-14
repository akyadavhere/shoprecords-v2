import React, { Fragment } from 'react'

export default function CollapsibleTable(props) {
 	return (
		<table className='table table-borderless align-middle text-center m-0 p-0'>
			<thead className='table-primary'>
				<tr>
					<td>S No.</td>
					{props.data.head.map((item,index) => (
						<td key={index}>{item}</td>
					))}
					<td>Expand</td>
				</tr>
			</thead>
			<tbody>
				{props.data.rows.map((row,index) => (
					<Fragment key={row.id}>
						<tr className='hover-primary'>
							<td>{index+1}</td>
							{row.data.map((item,index) => (
								<td key={index}>{item}</td>
							))}
							{row.buttons?row.buttons.map((item,index) => (
                        <td key={index}>
                           <button id={row.id} className={'btn btn-sm btn-link text-decoration-none '+item.class} value={item.value} onClick={props.data.callback[index]}>{item.name}</button>
                        </td>
                     )):null}
							<td>
								<button className='btn btn-link text-info btn-sm text-decoration-none' data-bs-toggle='collapse' data-bs-target={'#'+props.name+row.id}>Show</button>
							</td>
						</tr>
						<tr>
							<td colSpan='10' className='p-0'>
								<div id={props.name+row.id} className='collapse'>
									{row.child}
								</div>
							</td>
						</tr>
					</Fragment>
				))}
			</tbody>
		</table>
  	)
}
