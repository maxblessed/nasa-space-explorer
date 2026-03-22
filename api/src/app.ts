import express from 'express'
import cors from 'cors'

import apodRoutes from './modules/apod/apod.routes'

const app = express()

app.use(cors())
app.use(express.json())

// health check (important for deployment)
app.get('/health', (_, res) => {
  res.json({ status: 'ok' })
})

// routes
app.use('/api/apod', apodRoutes)

export default app
