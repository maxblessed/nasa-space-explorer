import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:10000/api'
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL)
console.log('Environment:', process.env.NODE_ENV)
console.log('API URL:', API_URL)
export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? API_URL
      : 'http://localhost:10000/api',
})
