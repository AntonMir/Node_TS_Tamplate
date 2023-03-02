import dotenv from "dotenv"
dotenv.config()
import express, { Application } from "express"
import logger from "./logger"
import routes from './routes'


const app: Application = express()

const port = process.env.PORT || 6666

app.use(express.json())
app.use(routes)


app.listen(port, () => {
  try {
    logger.info(`Server start on port ${port}`)
  } catch(e) {
    logger.error('Error!!!!:',e)
  }
})



