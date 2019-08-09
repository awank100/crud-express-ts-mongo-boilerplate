import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import connectMongoose from './configs/Mongo'

// connect
connectMongoose(mongoose)

// Routes
import routes from './routes'



const app = express()
app.use(bodyParser.json({ strict: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

const PORT = 7000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
