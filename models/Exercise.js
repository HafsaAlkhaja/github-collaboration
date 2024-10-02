const mongoose = require("mongoose")
const exerciseScema = mongoose.Schema({
  name: String,
  description: String,
  exerciseCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExerciseCategory",
  },
  duration: String,
  imgs: [String],
  
})
const Exercise = mongoose.model("Exercise", exerciseScema)
module.exports = { Exercise }
