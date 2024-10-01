const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    weight: Number,
    height: Number,
    medical: String,
    goal: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model("User", userSchema)
