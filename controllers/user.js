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
  // Make sure req.query.id is valid
  if (!req.query.id) {
    return res.status(400).send("User ID is missing")
  }

  User.findById(req.query.id)
    .then((user) => {
      if (!user) {
        // If no user is found, handle the error appropriately
        return res.status(404).send("User not found")
      }
      res.render("user/edit", { user })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send("Internal server error")
    })
}
exports.user_update_post = (req, res) => {
  console.log("req.file:", req.file) // To check if the file was uploaded
  console.log("req.body:", req.body) // To check the form data

  // Prepare the updated data
  const updatedData = {
    name: req.body.name,
    email: req.body.email,
    weight: req.body.weight,
    height: req.body.height,
    medical: req.body.medical,
    goal: req.body.goal,
  }

  // If a file was uploaded, update the avatar field
  if (req.file) {
    updatedData.avatar = "/uploads/" + req.file.filename
  }

  // Update the user document
  User.findByIdAndUpdate(req.user._id, updatedData)
    .then(() => {
      console.log("User updated successfully")
      res.redirect("/index")
    })
    .catch((err) => {
      console.error("Error updating user:", err)
      res.status(500).send("Error updating user profile")
    })
}

exports.user_delete_get = (req, res) => {
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
