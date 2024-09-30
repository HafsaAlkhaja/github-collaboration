const User = require("../models/User")
const express = require("express")
exports.user_show_get = (req, res) => {
  console.log(req.user)
  User.findById(req.user)
    .then((user) => {
      console.log("User information")
      res.render("user/profile", { user })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.user_edit_get = (req, res) => {
  console.log(req.query.id)
  User.findById(req.query.id)
    .then((user) => {
      res.render("user/profile", { user })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.user_update_post = (req, res) => {
  console.log(req.query.id)
  User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.render("user/profile")
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.user_delete_post = (req, res) => {
  console.log(req.query.id)
  User.findByIdAndDelete(req.body.id)
    .then(() => {
      res.render("/home/index")
    })
    .catch((err) => {
      console.log(err)
    })
}
