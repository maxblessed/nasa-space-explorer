import axios from 'axios'
import { ApodResponse } from './apod.types'
import { HttpNotFoundError } from '../../utils/errorHandler'

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.NASA_API_KEY
export const getApodData = async (): Promise<ApodResponse> => {
  if (!BASE_URL || !API_KEY) {
    throw new HttpNotFoundError('Missing NASA API configuration')
  }
  const res = await axios.get<ApodResponse>(`${BASE_URL}/planetary/apod`, {
    params: { api_key: API_KEY },
  })

  return res.data
}

export const getApodDataRange = async (
  startDate: string,
  endDate: string,
): Promise<ApodResponse[]> => {
  if (!BASE_URL || !API_KEY) {
    throw new HttpNotFoundError('Missing NASA API configuration')
  }
  const res = await axios.get<ApodResponse[]>(`${BASE_URL}/planetary/apod`, {
    params: { api_key: API_KEY, start_date: startDate, end_date: endDate },
  })

  return res.data
}
