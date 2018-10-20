var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
var ExifImage = require("exif").ExifImage;

/**
 * Default: converted: false, downloaded: false, modified: false
 * 1. Metadata --> no: converted = true, continue; yes: continue
 * 2. Reverse Image search --> found: downloaded = true, exit; not found: continue
 * 3. JPEG detection --> found: modified = true, exit; not found: exit
 */
router.post("/", upload.single("photo"), function (req, res, next) {
  var result = {
    url: req.protocol + '://' + req.get('host') + '/' + req.file.filename,
    converted: false,
    downloaded: false,
    modified: false
  };

  try {
    new ExifImage({ image: req.file.path }, function (error, exifData) {
      if (error) {
        console.log("Error: " + error.message);
      } else {
        var data = exifData;

        if (data.image && data.image.Make && data.image.Model) {
          //
        } else {
          result.converted = true;
        }

        // TODO: jpeg processing and machine learning
        res.send(result);
      }
    });
  } catch (error) {
    console.log("Error: " + error.message);
  }
});

module.exports = router;
