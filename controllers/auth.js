const passport = require("passport")
exports.login_auth_google = passport.authenticate("google", {
  scope: ["profile", "email"],
})
exports.callback_auth_google = (req, res) => {
  passport.authenticate("google", {
    successRedirect: "/index",
    failureRedirect: "/index",
  })(req, res)
}
exports.logout_auth_google = (req, res) => {
  req.logout(function () {
    res.redirect("/")
  })
}
