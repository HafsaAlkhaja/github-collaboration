const express = require("express")
const router = express.Router()

//controller
const scheduleCtrl = require('../controllers/schedule')
router.get('/add', scheduleCtrl.addSchedule)
router.get('/add', scheduleCtrl.schedule_create_get)
router.post('/add', scheduleCtrl.schedule_create_post)

router.get('/index', scheduleCtrl.schedule_index_get)


module.exports=router