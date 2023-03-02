import log4js from "log4js"
const logger = log4js.getLogger()
// Логирование
logger.level = process.env.LOG_LEVEL || 'debug'
// logger.info('log4js log info')
// logger.debug('log4js log debug')
// logger.error('log4js log error')

export default logger