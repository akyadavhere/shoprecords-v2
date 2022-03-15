export default function handleStatusChange(set, value) {

   return (
      (e) => {
         set(value.map(item => {
            if (item.id === e.target.id) {
               if (item.buttons[0].text === "Accepted") {
                  item.buttons[0].text = "Pending"
                  item.buttons[0].class[1] = "text-warning"
               } else {
                  item.buttons[0].text = "Accepted"
                  item.buttons[0].class[1] = "text-secondary"
      
               }
            }
            return item
         }))
      }
   )
}
