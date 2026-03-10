import axios from "axios"

export const BaseApi = axios.create({

 baseURL: "http://localhost:5000/api",
 withCredentials: true,

})