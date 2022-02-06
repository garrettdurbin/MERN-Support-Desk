// Import Express Module
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to Database
connectDB()

// Create an Express Application
const app = express()

// Send Res in JSON
app.use(express.json())
// Receive Body as URL Encoded
app.use(express.urlencoded({extended: false}))

// Route Definition
app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to the Support Desk API'})
})


// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

// Start Server, Print Port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))




