import axios from 'axios'
import { ApodResponse } from './apod.types'

const BASE_URL = 'https://api.nasa.gov'
const API_KEY = process.env.NASA_API_KEY
console.log('Using NASA API Key:', API_KEY)
export const getApodData = async (): Promise<ApodResponse> => {
  const res = await axios.get<ApodResponse>(`${BASE_URL}/planetary/apod`, {
    params: { api_key: API_KEY },
  })

  return res.data
}

export const getApodDataRange = async (
  startDate: string,
  endDate: string,
): Promise<ApodResponse[]> => {
  const res = await axios.get<ApodResponse[]>(`${BASE_URL}/planetary/apod`, {
    params: { api_key: API_KEY, start_date: startDate, end_date: endDate },
  })

  return res.data.reverse()
}

export const getApodDataAnalysis = async (
  startDate: string,
  endDate: string,
): Promise<ApodResponse[]> => {
  const res = await axios.get<ApodResponse[]>(`${BASE_URL}/planetary/apod`, {
    params: { api_key: API_KEY, start_date: startDate, end_date: endDate },
  })

  return res.data
}
