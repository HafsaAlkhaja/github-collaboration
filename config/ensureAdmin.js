// ensureAdmin.js
module.exports = function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next() // User is authenticated and is an admin, allow access
  }
  res.redirect("/index")
}
