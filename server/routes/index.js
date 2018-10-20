var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
var sizeOf = require("image-size");
var ExifImage = require("exif").ExifImage;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Trust Photo" });
});

router.post("/", upload.single("photo"), function(req, res, next) {
  var result = false;
  var path = req.file.path;
  var size = sizeOf(path);
  var data;

  if (size.width < 1000 || size.height < 1000) {
    res.render("index", {
      title: "Trust Photo",
      result: result,
      size: size
    });
    return;
  }

  try {
    new ExifImage({ image: path }, function(error, exifData) {
      if (error) {
        console.log("Error: " + error.message);
      } else {
        data = exifData;

        if (data.image && data.image.Make && data.image.Model) {
          result = true;
        }
      }

      res.render("index", {
        title: "Trust Photo",
        result: result,
        size: size,
        data: data
      });
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.render("index", {
      title: "Trust Photo",
      result: result,
      size: size
    });
  }
});

module.exports = router;
