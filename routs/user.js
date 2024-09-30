const express = require("express")
const router = express.Router()
router.use(express.urlencoded({ extended: true }))
// controller
const userCtrl = require("../controllers/user")
// routes
router.get("/profile", userCtrl.user_show_get)
// router.get("/profile", userCtrl.user_edit_get)
router.post("/profile", userCtrl.user_update_post)
router.get("/index", userCtrl.user_delete_post)
module.exports = router
