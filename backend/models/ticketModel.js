// Require Mongoose
const mongoose = require('mongoose')

// Define a schema
const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
      enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  }, 
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)