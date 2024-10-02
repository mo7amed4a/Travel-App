import axios from "axios";



const Authorization = localStorage.getItem('token')

export const Axios = axios.create({
    baseURL: "194.164.77.238:8003",
    Authorization:`Baerer ${Authorization}`

})