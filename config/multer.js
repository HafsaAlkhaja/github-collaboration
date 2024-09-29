const multer = require("multer")
const path = require("path")

// Set up storage engine
const storage = multer.diskStorage({
  destination: "./public/uploads", // Ensure this path exists
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    )
  },
})

// Filter for images
const fileFilter = (req, file, cb) => {
  cb(null, true)
}

// Initialize multer with the configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: fileFilter,
}).array("imgs", 5)

module.exports = upload
