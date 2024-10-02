const mongoose = require('mongoose')
const scheduleSchema = mongoose.Schema({
  name: String,
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  exercise: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ]
})
const Schedule = mongoose.model('Schedule', scheduleSchema)
module.exports = { Schedule }
