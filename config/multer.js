const multer = require("multer");

// Multer Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        `.${file.originalname.split(".").pop()}`
    );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
