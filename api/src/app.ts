import express from 'express'
import cors from 'cors'

import apodRoutes from './modules/apod/apod.routes'

const app = express()

app.use(cors())
app.use(express.json())

// health check
app.get('/health', (_, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/apod', apodRoutes)

export default app
