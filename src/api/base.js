import axios from "axios";

const token = localStorage.getItem("token")

export default axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
   headers: {
      common: {
        ...token ? {"Authorization": `Bearer ${JSON.parse(token).access}`} : {}
      },
      post: {
         "Content-Type":"application/json"
      }
   }
})
