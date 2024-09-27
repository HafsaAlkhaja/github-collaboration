const mongoose = require("mongoose")
const exerciseCategoryScema = mongoose.Schema({
  name: String,
  description: String,
  exercise: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exercise",
    },
  ],
})
const ExerciseCategory = mongoose.model(
  "ExerciseCategory",
  exerciseCategoryScema
)
module.exports = { ExerciseCategory }
