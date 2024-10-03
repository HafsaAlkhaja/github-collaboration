const express = require("express")
const router = express.Router()
const ensureAdmin = require("../config/ensureAdmin")
router.use(express.urlencoded({ extended: true }))

const exerciseCategoryctrl = require("../controllers/exerciseCategory")
router.get("/add", ensureAdmin, exerciseCategoryctrl.exercisecat_create_get)
router.post("/add", ensureAdmin, exerciseCategoryctrl.exercisecat_create_post)
router.get("/index", exerciseCategoryctrl.exercisecat_index_get)
router.get("/details", exerciseCategoryctrl.exercisecat_details_get)
router.get("/edit", ensureAdmin, exerciseCategoryctrl.exercisecat_edit_get)
router.post(
  "/update",
  ensureAdmin,
  exerciseCategoryctrl.exercisecat_update_post
)
router.get("/delete", ensureAdmin, exerciseCategoryctrl.exercisecat_delete_get)

module.exports = router
