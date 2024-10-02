const User = require("../models/User")
const express = require("express")
exports.user_show_get = (req, res) => {
  console.log(req.user)
  User.findById(req.user)
    .then((user) => {
      // console.log("User information")
      res.render("user/profile", { user })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.user_edit_get = (req, res) => {
  console.log(req.query.id)
  console.log(req.body)
  User.findById(req.query.id)
    .then((user) => {
      res.render("user/profile", { user })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.user_update_post = (req, res) => {
  console.log("req.body.id", req.user)
  console.log(req.body)
  User.findByIdAndUpdate(req.user, req.body)
    .then(() => {
      res.redirect("/index")
    })
    .catch((err) => {
      console.log(err)
    })
}


exports.user_delete_post = (req, res) => {
  User.findByIdAndDelete(req.user._id)
    .then(() => {
      req.logout(function () {
        res.redirect("/index")
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
