import axios from "axios";

const Authorization = localStorage.getItem('Authorization');
export const baseURL = "http://194.164.77.238:8003"; 

export const Axios = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${Authorization}` 
    }
});
