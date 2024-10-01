const express = require("express")
const router = express.Router()
router.use(express.urlencoded({ extended: true }))
const ensureLoggedIn = require("../config/ensureLoggedIn")
// controller
const userCtrl = require("../controllers/user")
// routes
router.get("/profile", ensureLoggedIn, userCtrl.user_show_get)
router.get("/profile", userCtrl.user_edit_get)
router.post("/profile", ensureLoggedIn, userCtrl.user_update_post)
router.get("/index", ensureLoggedIn, userCtrl.user_delete_post)
module.exports = router
