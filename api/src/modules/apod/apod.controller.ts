import { Request, Response, NextFunction } from 'express'
import { getApodData, getApodDataRange } from './apod.service'
import { validateDate } from '../../helper/validateDate'
import { paginate } from '../../helper/paginate'
import { aggregateData } from '../../helper/aggregateData'
import { HttpBadRequestError } from '../../utils/errorHandler'

export const getApod = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await getApodData()
    res.json(data)
  } catch (error) {
    next(error)
  }
}

export const getApodRange = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let { startDate, endDate, page = 1, limit = 8 } = req.query
    if (!startDate || !endDate)
      throw new HttpBadRequestError('Missing startDate or endDate')
    let { start, end } = validateDate(startDate as string, endDate as string)
    const data = (await getApodDataRange(start, end)).reverse()
    const paginatedData = paginate(data, Number(page), Number(limit))
    res.json(paginatedData)
  } catch (error) {
    next(error)
  }
}

export const getApodAnalysis = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let { startDate, endDate } = req.query
    if (!startDate || !endDate)
      throw new HttpBadRequestError('Missing startDate or endDate')
    let { start, end } = validateDate(startDate as string, endDate as string)
    const data = await getApodDataRange(start, end)
    const aggregatedData = aggregateData(data)
    res.json({ ...aggregatedData, start, end })
  } catch (error) {
    next(error)
  }
}
