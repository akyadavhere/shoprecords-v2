export default function handleStatusChange(set, rows) {

   return (
      (e) => {
         set(rows.map(row => {
            if (row.id === e.target.id) {
               if (row.buttons[0].text === "Accepted") {
                  row.buttons[0].text = "Pending"
                  row.buttons[0].class[1] = "text-warning"
               } else {
                  row.buttons[0].text = "Accepted"
                  row.buttons[0].class[1] = "text-secondary"
      
               }
            }
            return row
         }))
      }
   )
}
