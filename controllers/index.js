exports.index_get = (req, res) => {
  res.render("home/index", { welcome: "Your body is a temple. Treat it well" })
}
