import { Request, Response, ErrorRequestHandler, NextFunction} from 'express'
import log4js from "log4js"

export const logger = log4js.getLogger()
logger.level = process.env.LOG_LEVEL || 'debug'

  
export function loggingBefore(error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) {
  logger.info('do something Before...')
  next()
}

export function loggingAfter(error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) {
  logger.info('do something After...')
  next()
}