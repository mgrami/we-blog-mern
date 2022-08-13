const express = require("express")
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()

const app = express()

// body parser middlewares
app.use(express.json()) // raw json
app.use(express.urlencoded({ extended: false })) // x-www-form-urlencoded

app.use('/api/v1/blog', require('./routes/blogRoutes'))
app.use('/api/v1/users', require('./routes/userRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server is running on port ${port}`))