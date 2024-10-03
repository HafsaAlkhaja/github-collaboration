const multer = require("multer")
const path = require("path")

// Set up storage engine
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    )
  },
})

// File filter for images and videos
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|mp4|mov|avi|mkv/ // Add video file types here
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true) // Accept file
  } else {
    cb(new Error("Only images and videos are allowed!"), false) // Reject file
  }
}

// Initialize multer with the configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 }, // Increase limit for larger video files
  fileFilter: fileFilter,
}).array("imgs", 5) // Allow multiple uploads (up to 5 files)
// For uploading a single profile image (avatar)
const uploadProfile = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB for images
}).single("avatar") // Handle only one file input with name "avatar"

module.exports = { upload, uploadProfile }
