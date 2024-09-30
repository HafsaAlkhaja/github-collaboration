const express = require("express")
const router = express.Router()
//controllers
const authctrl = require("../controllers/auth")
//routs
router.get("/auth/google", authctrl.login_auth_google)
router.get("/oauth2callback", authctrl.callback_auth_google)
router.get("/auth/logout", authctrl.logout_auth_google)
module.exports = router
