import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL)
const API = API_URL ? API_URL + 'api' : 'http://localhost:10000/api'
export const api = axios.create({
  baseURL: API,
})
