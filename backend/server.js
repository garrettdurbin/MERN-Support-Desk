// Import Express Module
const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

// Create an Express Application
const app = express()

// Route Definition
app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to the Support Desk API'})
})


// Routes
app.use('/api/users', require('./routes/userRoutes'))

// Start Server, Print Port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))




