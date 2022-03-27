import axios from "axios";

const token = localStorage.getItem("token")

export default axios.create({
   baseURL: "http://localhost:8000/api/",
   headers: {
      common: {
        ...token ? {"Authorization": `Bearer ${JSON.parse(token).access}`} : {}
      },
      post: {
         "Content-Type":"application/json"
      }
   }
})
