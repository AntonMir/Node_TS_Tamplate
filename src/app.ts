import "module-alias/register"
import dotenv from "dotenv"
dotenv.config()
import express, { Application } from "express"
import { logger, loggingAfter, loggingBefore } from '@src/middleware/logger'
import routes from "@src/routes"


const app: Application = express()

const port: string | number = process.env.PORT || 6666

app.use(express.json()) //парсим json формат данных
app.use(loggingBefore) // логирование до обработки запроса
app.use(routes) // обработка запроса, формирование и возврат ответа
app.use(loggingAfter) // логирование после обработки запроса

app.listen(port, () => {
  logger.info(`Server start on port ${port}`)
})