//dependencies
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
//require and initialize .env
require("dotenv").config()
//port number
const PORT = process.env.PORT

//initalize express
const app = express()
app.use(express.static("public"))
//database configarition
const dp = require("./config/db")
app.get("/", function (req, res) {})

app.set("view engine", "ejs")
app.use(expressLayouts)

// Import Routes
const indexRouter = require("./routes/index")

// Mount Routes
app.use("/index", indexRouter)
app.use(express.static("public"))

//listen for http request on PORT 4000
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})
