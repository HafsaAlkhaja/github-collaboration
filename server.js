//dependencies
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const path = require("path")
//require and initialize .env
require("dotenv").config()
//port number
const PORT = process.env.PORT

//initalize express
const app = express()
app.use(express.static("public"))
//database configarition
const dp = require("./config/db")

app.set("view engine", "ejs")
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, "public")))

// Import Routes
const ExerciseCategoryRouter = require("./routs/exerciseCategory")
const ExerciseRouter = require("./routs/exercise")
// Mount Routes
app.use("/exerciseCategory", ExerciseCategoryRouter)
app.use("/exercise", ExerciseRouter)
//listen for http request on PORT 4000
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})
