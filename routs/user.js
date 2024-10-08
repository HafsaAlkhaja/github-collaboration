const express = require("express")
const router = express.Router()
router.use(express.urlencoded({ extended: true }))
const ensureLoggedIn = require("../config/ensureLoggedIn")
const { uploadProfile } = require("../config/multer")
// controller
const userCtrl = require("../controllers/user")
// routes
router.get("/profile", ensureLoggedIn, userCtrl.user_show_get)
router.get("/edit", userCtrl.user_edit_get)
router.post("/update", ensureLoggedIn, uploadProfile, userCtrl.user_update_post)
router.get("/delete", ensureLoggedIn, userCtrl.user_delete_get)

module.exports = router
