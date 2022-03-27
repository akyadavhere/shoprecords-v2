import React, { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import API from "../api/base"
import axios from "axios"

export default function Root() {

   const [isLogin, setIsLogin] = useState(localStorage.getItem("loggedin") === "true")
   const navigate = useNavigate()

   useEffect(() => {
      let isRefreshing = false
      let failedQueue = []

      const processQueue = (error, token=null) => {
         failedQueue.forEach(prom => {
            if (error) {
               prom.reject(error);
            } else {
               prom.resolve(token);
            }
         })
         failedQueue = []
      }
      API.interceptors.response.use(
         response => response, 
         (error) => {
            const originalRequest = error.config;

            if (error.response.status === 401 || error.response.status === 403) {
               if (isRefreshing) {
                  return new Promise(function(resolve, reject) {
                     failedQueue.push({resolve, reject})

                  }).then(token => {
                     originalRequest.headers["Authorization"] = "Bearer " + token
                     return axios(originalRequest)

                  }).catch(error => {
                     return Promise.reject(error);
                  })
               }

               isRefreshing = true

               const retrievedToken = JSON.parse(localStorage.getItem("token"))
               if (! retrievedToken) {
                  isRefreshing = false
                  return Promise.reject(error)
               }
               const refreshToken = retrievedToken.refresh

               return new Promise(function (resolve, reject) {
                  axios.post("http://localhost:8000/api/refresh", {"refresh": refreshToken})
                  .then((res) => {

                     window.localStorage.setItem("token", JSON.stringify({
                        "access": res.data.access,
                        "refresh": refreshToken
                     }))

                     API.defaults.headers.common["Authorization"] = "Bearer " + res.data.access
                     originalRequest.headers["Authorization"] = "Bearer " + res.data.access

                     processQueue(null, res.data.access);
                     resolve(axios(originalRequest))
                  })
                  .catch((error) => {
                        processQueue(error, null)
                        localStorage.clear()
                        navigate("/login")
                        reject(error)
                  })
                  .finally(() => {isRefreshing = false})
               })
            }
            return Promise.reject(error);
         }
      )
   },
   [navigate])

   return (
      <Outlet context={[isLogin, setIsLogin]}/>
   )
}
