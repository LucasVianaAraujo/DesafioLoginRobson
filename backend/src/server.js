import AddRoutes from './routes.js'
import express from 'express'
import cors from 'cors'

const server = express()

server.use(express.json())
server.use(cors())

AddRoutes(server)

server.listen(5001, () => console.log('Connected to MySQL!'))