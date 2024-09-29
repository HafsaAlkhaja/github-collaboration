const mongoose = require("mongoose")
const scheduleSchema = mongoose.Schema({
  name: String,
  date: Date,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  excercise: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "excercise",
    },
  ],
})
const Schedule = mongoose.model("Schedule", scheduleSchema)
module.exports = { Schedule }
