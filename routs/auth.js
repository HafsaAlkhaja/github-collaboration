const express = require("express")
const router = express.Router()
const ensureLoggedIn = require("../config/ensureLoggedIn")
//controllers
const authctrl = require("../controllers/auth")
//routs
router.get("/auth/google", authctrl.login_auth_google)
router.get("/oauth2callback", authctrl.callback_auth_google)
router.get("/auth/logout", ensureLoggedIn, authctrl.logout_auth_google)
module.exports = router
