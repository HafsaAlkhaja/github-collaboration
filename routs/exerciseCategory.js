const express = require("express")
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

const exerciseCategoryctrl = require("../controllers/exerciseCategory")
router.get("/add", exerciseCategoryctrl.exercisecat_create_get)
router.post("/add", exerciseCategoryctrl.exercisecat_create_post)
router.get("/index", exerciseCategoryctrl.exercisecat_index_get)
router.get("/details", exerciseCategoryctrl.exercisecat_details_get)
router.get("/edit", exerciseCategoryctrl.exercisecat_edit_get)
router.post("/update", exerciseCategoryctrl.exercisecat_update_post)
router.get("/delete", exerciseCategoryctrl.exercisecat_delete_get)

module.exports = router
