import axios from "axios"

export const BaseApi = axios.create({

 baseURL: import.meta.env.VITE_API_URL,
 withCredentials: true,

})