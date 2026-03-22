import { Router } from 'express'
import { getApod, getApodAnalysis, getApodRange } from './apod.controller'

const router = Router()

router.get('/', getApod)
router.get('/range', getApodRange)
router.get('/analysis', getApodAnalysis)

export default router
