const express = require("express")
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

const exercisectrl = require("../controllers/exercise")
router.get("/add", exercisectrl.exercise_create_get)
router.post("/add", exercisectrl.exercise_create_post)
router.get("/index", exercisectrl.exercise_index_get)
router.get("/details", exercisectrl.exercise_details_get)
router.get("/edit", exercisectrl.exercise_edit_get)
router.post("/update", exercisectrl.exercise_update_post)
router.get("/delete", exercisectrl.exercise_delete_get)

module.exports = router
