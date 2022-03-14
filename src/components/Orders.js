import React, { useEffect, useState } from 'react'
import CollapsibleTable from './CollapsibleTable'
import Table from './Table'

export default function Orders() {
	const [rows, setRows] = useState([])

	const handleStatusChange = e => {
		console.log(e.target.id)
		console.log(rows)
		setRows(rows.map(item => {
			console.log(item)
			if (item.id === e.target.id){
				console.log('in',item)
				item.buttons[0].value = item.buttons[0].value === 1 ? 0 : 1
				item.buttons[0].name = item.buttons[0].value === 1 ? 'Accepted' : 'Pending'
				item.buttons[0].class = item.buttons[0].value === 1 ? 'text-secondary' : 'text-warning'
			}
			return item
		}))
	}

	const handleDelete = e => {
		setRows(rows.filter(item => item.id !== e.target.id))
	}

   const tableData = {
		class: 'secondary',
		head: ['Head-1','Head-1','Head-1','Head-1'],
		rows: [
			{
				id: '1',
				data: ['Row-1','Row-1','Row-1','Row-1'],
			},
			{
				id: '2',
				data: ['Row-1','Row-1','Row-1','Row-1'],
			},
			{
				id: '3',
				data: ['Row-1','Row-1','Row-1','Row-1'],
			},
			{
				id: '14',
				data: ['Row-1','Row-1','Row-1','Row-1'],
			},
		]
	}
	var baseRows = [
		{
			id: '1',
			data: ['Row-1','Row-1','Row-1','Row-1'],
			child: <Table data={tableData}/>,
		},
		{
			id: '2',
			data: ['Row-1','Row-1','Row-1','Row-1'],
			child: <Table data={tableData}/>
		},
		{
			id: '3',
			data: ['Row-1','Row-1','Row-1','Row-1'],
			child: <Table data={tableData}/>
		},
		{
			id: '4',
			data: ['Row-1','Row-1','Row-1','Row-1'],
			child: <Table data={tableData}/>
		},
	]

	useEffect(() => {
		setRows(baseRows.map(item => ({...item, ...{
			buttons: [
				{
					name: 'Accepted',
					class: 'text-secondary',
					value: 1,
				},
				{
					name: 'Delete',
					class: 'text-danger',
					value: null
				}
			]
		}})))
	},[])

   const collapsibleTableData = {
		head: ['Head-1','Head-1','Head-1','Head-1','Status','Delete'],
		rows: rows,
		callback: [handleStatusChange, handleDelete]
	}

   return (
		<div className='shadow bg-white rounded-3'>
			<div className='p-4'>
				<CollapsibleTable name='table' data={collapsibleTableData}/>
			</div>
		</div>
   )
}
