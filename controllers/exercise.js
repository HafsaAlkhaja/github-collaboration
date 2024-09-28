const express = require("express")
const { ExerciseCategory } = require("../models/ExerciseCategory")
const { Exercise } = require("../models/Exercise")
const path = require("path")

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
  let exercise = new Exercise(req.body)
  exercise
    .save()
    .then(() => {
      ExerciseCategory.findById(req.body.exerciseCategory)
        .then((exerciseCategory) => {
          exerciseCategory.exercise.push(exercise._id)
          exerciseCategory.save()
        })
        .catch((err) => {
          console.log(err)
        })
      res.redirect("/exercise/index")
    })
    .catch((err) => {
      console.log(err)
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
