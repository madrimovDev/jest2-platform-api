import express from 'express'
import cors  from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
    path: path.join(__dirname, '../.env')
})

import userRoutes from './routes/user.routes'
import setRoutes from './routes/set.routes'
import questionRoutes from './routes/question.routes'
import sessionRoutes from './routes/session.routes'

import { authMiddleware } from './middlewares/auth.middleware'

const app = express()
//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(authMiddleware)

app.use('/api-docs/', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

//Routes
app.use('/api', userRoutes)
app.use('/api/set', setRoutes)
app.use('/api/question', questionRoutes)
app.use('/api/session', sessionRoutes)

// run server
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})