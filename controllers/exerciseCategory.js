const express = require("express")
const { ExerciseCategory } = require("../models/ExerciseCategory")
const Exercise = require("../models/Exercise")

//create
exports.exercisecat_create_get = (req, res) => {
  res.render("exerciseCategory/add")
  console.log("rendered")
}
exports.exercisecat_create_post = (req, res) => {
  let exerciseCategory = new ExerciseCategory(req.body)
  exerciseCategory
    .save()
    .then(() => res.redirect("/exerciseCategory/index"))
    .catch((err) => {
      console.log(err)
    })
}
exports.exercisecat_index_get = (req, res) => {
  ExerciseCategory.find()
    .then((exerciseCategory) => {
      res.render("exerciseCategory/index", { exerciseCategory })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercisecat_details_get = (req, res) => {
  ExerciseCategory.findById(req.query.id)
    .populate("exercise")
    .then((exerciseCategory) => {
      console.log(exerciseCategory)
      res.render("exerciseCategory/details", { exerciseCategory })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercisecat_edit_get = (req, res) => {
  ExerciseCategory.findById(req.query.id)
    .then((exerciseCategory) => {
      res.render("exerciseCategory/edit", { exerciseCategory })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercisecat_update_post = (req, res) => {
  ExerciseCategory.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.redirect("/exerciseCategory/index")
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.exercisecat_delete_get = (req, res) => {
  ExerciseCategory.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect("/exerciseCategory/index")
    })
    .catch((err) => {
      console.log(err)
    })
}
