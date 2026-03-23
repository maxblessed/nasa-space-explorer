import { Request, Response, NextFunction } from 'express'
export class HttpErrors extends Error {
  statusCode = 500

  /**
   * @param message
   * @param statusCode
   */
  constructor(message: string, statusCode?: number) {
    super(message)
    if (statusCode) {
      this.statusCode = statusCode
    }
  }
}

export class HttpNotFoundError extends HttpErrors {
  constructor(message = '') {
    super(message, 404)
  }
}

export class HttpBadRequestError extends HttpErrors {
  constructor(message = '') {
    super(message, 400)
  }
}

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof HttpErrors) {
    return res.status(err.statusCode).json({ message: err.message })
  }
  res.status(500).json({ message: 'Internal Server Error' })
}
