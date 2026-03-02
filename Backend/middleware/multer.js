import multer from "multer";

// define storage
const storage = multer.diskStorage({
   
  filename: function (req, file, callback) {
    callback(null, file.originalname); // keep original file name
  },
});

// create upload instance
const upload = multer({ storage });

export default upload; 