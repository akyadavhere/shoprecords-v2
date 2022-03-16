import Table from "../components/Table"

const tableProps = {
   head: ["Product", "Price", "Quantity", "Sub Total"],
   body: [
      {
         id: "1",
         data: ["Item-1", "70", "8", "560"],
         buttons: [],
      },
      {
         id: "2",
         data: ["Item-2", "120", "4", "480"],
         buttons: [],
      },
      {
         id: "3",
         data: ["Item-3", "65", "10", "650"],
         buttons: [],
      },
      {
         id: "4",
         data: ["Item-4", "180", "5", "900"],
         buttons: [],
      },
   ],
   config: {
      color: "secondary"
   }
}

export const orderList = [
   {
      id: "1",
      data: ["Diana", "14-03-2022", "16:50", "1860"],
      child: <Table {...tableProps}/>,
      buttons: [
         {
            text: "Accepted",
            class: ["btn btn-sm btn-link text-decoration-none text-secondary"]
         },
         {
            text: "Delete",
            class: ["btn btn-sm btn-link text-decoration-none text-danger"],
         },
      ],
   },
   {
      id: "2",
      data: ["Emma", "16-04-2022", "20:00", "2590"],
      child: <Table {...tableProps}/>,
      buttons: [
         {
            text: "Accepted",
            class: ["btn btn-sm btn-link text-decoration-none text-secondary"]
         },
         {
            text: "Delete",
            class: ["btn btn-sm btn-link text-decoration-none text-danger"],
         },
      ],
   },
   {
      id: "3",
      data: ["Jennifer", "25-05-2022", "18:30", "2140"],
      child: <Table {...tableProps}/>,
      buttons: [
         {
            text: "Pending",
            class: ["btn btn-sm btn-link text-decoration-none text-warning"]
         },
         {
            text: "Delete",
            class: ["btn btn-sm btn-link text-decoration-none text-danger"],
         },
      ],
   },
   {
      id: "4",
      data: ["Katherine", "07-07-2022", "19:40", "4035"],
      child: <Table {...tableProps}/>,
      buttons: [
         {
            text: "Accepted",
            class: ["btn btn-sm btn-link text-decoration-none text-secondary"]
         },
         {
            text: "Delete",
            class: ["btn btn-sm btn-link text-decoration-none text-danger"],
         },
      ],
   },
   {
      id: "5",
      data: ["Lauren", "19-08-2022", "21:10", "3070"],
      child: <Table {...tableProps}/>,
      buttons: [
         {
            text: "Pending",
            class: ["btn btn-sm btn-link text-decoration-none text-warning"]
         },
         {
            text: "Delete",
            class: ["btn btn-sm btn-link text-decoration-none text-danger"],
         },
      ],
   },
]