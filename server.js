//dependencies
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const path = require("path")
const session = require("express-session")
const passport = require("passport")

//require and initialize .env
require("dotenv").config()
//port number
const PORT = process.env.PORT

//initalize express
const app = express()
require("./config/passport")
app.use(express.static("public"))
//database configarition

const dp = require("./config/db")
app.get("/", function (req, res) {})

const db = require("./config/db")

app.set("view engine", "ejs")
//
app.use(expressLayouts)
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
  })
)
app.use(passport.initialize())
app.use(passport.session())
// Share the information with other pages
app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
})
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, "public")))

// Import Routes

const indexRouter = require("./routes/index")

// Mount Routes
app.use("/index", indexRouter)
app.use(express.static("public"))

const ExerciseCategoryRouter = require("./routs/exerciseCategory")

const scheduleRouter = require("./routs/schedule")
// Mount Routes
app.use("/exerciseCategory", ExerciseCategoryRouter)
app.use("/schedule", scheduleRouter)
const authRouter = require("./routs/auth")

const ExerciseRouter = require("./routs/exercise")
// Mount Routes
app.use("/exerciseCategory", ExerciseCategoryRouter)
app.use("/exercise", ExerciseRouter)
app.use("/", authRouter)

//listen for http request on PORT 4000
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})
