const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddleware')
const port = process.env.PORT || 8000

const app = express()

// body parser middlewares
app.use(express.json()) // raw json
app.use(express.urlencoded({ extended: false })) // x-www-form-urlencoded

app.use('/api/v1/blog', require('./blog/routes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server is running on port ${port}`))