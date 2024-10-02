const { Schedule } = require('../models/Schedule')
const { Exercise } = require('../models/Exercise')
const { ExerciseCategory } = require('../models/ExerciseCategory')
const { User } = require('../models/User')

exports.schedule_create_get = (req, res) => {
  Exercise.find()
    .then((exercises) => {
      res.render('schedule/add', { exercises })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.schedule_create_post = (req, res) => {
  console.log(req.body)
  let exercises = req.body.exercise
    ? Array.isArray(req.body.exercise)
      ? req.body.exercise
      : [req.body.exercise]
    : []
  let schedule = new Schedule({
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    exercise: exercises,
    user: req.user
  })
  schedule
    .save()
    .then(() => {
      const exercisePromises = exercises.map((exerciseId) => {
        return Exercise.findById(exerciseId)
          .then((exercise) => {
            if (exercise) {
              exercise.schedule.push(schedule._id) // Only push if exercise exists
              return exercise.save() // Ensure we return the promise
            } else {
              console.log(`Exercise with ID ${exerciseId} not found`) // Log the error
            }
          })
          .catch((err) => {
            console.error('Error finding exercise:', err) // Log any errors from finding exercises
          })
      })

      return Promise.all(exercisePromises) // Wait for all exercise updates
    })
    .then(() => {
      res.redirect('/schedule/index') // Redirect after all saves are complete
    })
    .catch((err) => {
      console.error('Error saving schedule:', err) // Log the error
      res.status(500).send('Error saving schedule')
    })
}
exports.schedule_index_get = (req, res) => {
  if (!req.user) {
    return res.redirect('/auth/google')
  }

  Schedule.find({ user: req.user._id })
    .populate({
      path: 'exercise',
      populate: {
        path: 'exerciseCategory',
        model: 'ExerciseCategory'
      }
    })
    .then((schedules) => {
      res.render('schedule/index', { schedules })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.addSchedule = (req, res) => {
  ExerciseCategory.find()
    .populate('exercise')
    .then((exerciseCategory) => {
      res.render('schedule/add', { exerciseCategory: exerciseCategory })
    })

    .catch((err) => {
      console.error(err)
      res.send('Error fetching exercise categories')
    })
}

exports.schedule_show_get = (req, res) => {
  console.log(req.query.id)
  Schedule.findById(req.query.id)
    .populate('exercise')
    .then((schedule) => {
      console.log('Schedule found:', schedule)
      res.render('schedule/details', { schedule })
    })
    .catch((err) => {
      console.log(err)
    })
}
