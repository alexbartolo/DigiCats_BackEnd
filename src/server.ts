import express from 'express'
import 'dotenv/config'
import { catRouter } from './routes/cats.routes'

const server = express()

server.use('/', catRouter())

server.listen(process.env.port)

