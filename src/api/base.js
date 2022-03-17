import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    post: {
      "Content-Type":"application/json"
    }
  }
});