//dependencies
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const session = require('express-session')
const passport = require('passport')



//require and initialize .env
require('dotenv').config()
//port number
const PORT = process.env.PORT

//initalize express
const app = express()
require('./config/passport')
app.use(express.static('public'))
//database configarition
app.use(express.urlencoded({ extended: true }));
const db = require('./config/db')
app.get('/', function (req, res) {})
app.set('view engine', 'ejs')
//
app.use(express.json());

app.use(expressLayouts)
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true
  })
)

app.use(passport.initialize())
app.use(passport.session())
// Share the information with other pages
app.use(function (req, res, next) {
  console.log("req.user", req.user)
  res.locals.user = req.user
  next()
})
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))


const indexRouter = require("./routs/index")
const ExerciseCategoryRouter = require("./routs/exerciseCategory")
const scheduleRouter = require("./routs/schedule")
const authRouter = require("./routs/auth")
const ExerciseRouter = require("./routs/exercise")
const UserRouter = require("./routs/user")

// Mount Routes
app.use("/exerciseCategory", ExerciseCategoryRouter)
app.use("/schedule", scheduleRouter)
app.use("/exercise", ExerciseRouter)
app.use("/", authRouter)
app.use("/index", indexRouter)
app.use("/user", UserRouter)

//listen for http request on PORT 4000
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})
