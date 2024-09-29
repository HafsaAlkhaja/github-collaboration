const express = require("express")
const { ExerciseCategory } = require("../models/ExerciseCategory")
const { Exercise } = require("../models/Exercise")
const upload = require("../config/multer")

exports.exercise_create_get = (req, res) => {
  ExerciseCategory.find()
    .then((exerciseCategory) => {
      res.render("exercise/add", { exerciseCategory })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercise_create_post = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err)
    }

    const imageFilenames = req.files
      ? req.files.map((file) => file.filename)
      : []

    const exercise = new Exercise({
      name: req.body.name,
      description: req.body.description,
      duration: req.body.duration,
      exerciseCategory: req.body.exerciseCategory,
      imgs: imageFilenames,
    })

    exercise
      .save()
      .then(() => {
        ExerciseCategory.findById(req.body.exerciseCategory)
          .then((exerciseCategory) => {
            exerciseCategory.exercise.push(exercise._id)
            return exerciseCategory.save()
          })
          .then(() => {
            return res.redirect("/exercise/index")
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

exports.exercise_index_get = (req, res) => {
  Exercise.find()
    .populate("exerciseCategory")
    .then((exercise) => {
      res.render("exercise/index", { exercise })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercise_details_get = (req, res) => {
  Exercise.findById(req.query.id)
    .populate("exerciseCategory")
    .then((exercise) => {
      res.render("exercise/details", { exercise })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercise_edit_get = (req, res) => {
  Exercise.findById(req.query.id)
    .populate("exerciseCategory")
    .then((exercise) => {
      res.render("exercise/edit", { exercise })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercise_update_post = (req, res) => {
  Exercise.findByIdAndUpdate(req.query.id)
    .populate("exerciseCategory")
    .then(() => {
      res.redirect("/exercise/index")
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercise_delete_get = (req, res) => {
  Exercise.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect("/exercise/index")
    })
    .catch((err) => {
      console.log(err)
    })
}
