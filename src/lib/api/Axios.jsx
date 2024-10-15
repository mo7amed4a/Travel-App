import axios from "axios";

const Authorization = localStorage.getItem('Authorization');
export const baseURL = "https://gheno.webbing-agency.com"; 

export const Axios = axios.create({
    baseURL: baseURL + '/api/v1',
    headers: {
        Authorization: `Bearer ${Authorization}` 
    }
});
