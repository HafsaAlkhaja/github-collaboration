const {Schedule} = require('../models/Schedule')
const {Exercise} = require('../models/Exercise')
const { ExerciseCategory } = require("../models/ExerciseCategory")


exports.schedule_create_get = (req, res) =>{
  Exercise.find()
  .then((exercises)=>{
    res.render('schedule/add', {exercises})
  })
  .catch((err)=>{
    console.log(err)
  })
}

exports.schedule_create_post = (req, res)=>{
  console.log(req.body)
  let exercises = Array.isArray(req.body.exercise) ? req.body.exercise : [req.body.exercise];
  let schedule = new Schedule({
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    exercise: exercises
})


  schedule.save()
  .then(() => {
    req.body.exercise.forEach(exercise => {
      Exercise.findById(exercise)
      .then((exercise)=>{
        exercise.schedule.push(schedule._id)
        exercise.save()
      })
      .catch((err)=>{
        console.log(err)
      })
      
    });
    res.redirect("/schedule/index")
  })
  .catch((err)=>{
    console.log(err)
  })
}

exports.schedule_index_get=(req, res)=>{
  Schedule.find()
  .populate({
    path: 'exercise', // Ensure this matches the field name in your schema
    populate: {
        path: 'exerciseCategory', // Assuming each exercise has a reference to a category
        model: 'ExerciseCategory' // Ensure this matches the model name for categories
    }
})
  .then((schedules)=>{
    res.render('schedule/index', {schedules})
  })
  .catch((err)=>{
    console.log(err)
  })
}

exports.addSchedule = (req, res) => {
  ExerciseCategory.find()
  .populate("exercise")
      .then((exerciseCategory) => {
          res.render('schedule/add', { exerciseCategory: exerciseCategory}) }) // Replace 'yourViewFile' with the actual name of your EJS file
      
      .catch((err) => {
          console.error(err);
          res.send("Error fetching exercise categories");
      });
};


