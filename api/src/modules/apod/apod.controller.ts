import { Request, Response } from 'express'
import {
  getApodData,
  getApodDataAnalysis,
  getApodDataRange,
} from './apod.service'
import { validateDate } from '../../helper/validateDate'
import { paginate } from '../../helper/paginate'
import { aggregateData } from '../../helper/aggregateData'

export const getApod = async (_: Request, res: Response) => {
  try {
    const data = await getApodData()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch APOD' })
  }
}

export const getApodRange = async (req: Request, res: Response) => {
  try {
    let { startDate, endDate, page = 1, limit = 8 } = req.query
    let { start, end } = validateDate(startDate as string, endDate as string)
    const data = await getApodDataRange(start, end)
    const paginatedData = paginate(data, Number(page), Number(limit))
    res.json(paginatedData)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch APOD' })
  }
}

export const getApodAnalysis = async (req: Request, res: Response) => {
  try {
    let { startDate, endDate } = req.query
    let { start, end } = validateDate(startDate as string, endDate as string)
    const data = await getApodDataAnalysis(start, end)
    const aggregatedData = aggregateData(data)
    res.json({ ...aggregatedData, start, end })
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch APOD' })
  }
}
