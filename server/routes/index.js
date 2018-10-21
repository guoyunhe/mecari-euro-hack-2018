var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
var ExifImage = require("exif").ExifImage;
var request = require('request');
var im = require('imagemagick');

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

  // 1. Metadata detection
  try {
    new ExifImage({ image: req.file.path }, function (error, exifData) {
      if (error) {
        // No metadata found
        result.converted = true;
      } else {
        var data = exifData;

        if (data.image && data.image.Make && data.image.Model) {
          //
        } else {
          result.converted = true;
        }
      }

      // 2. Reverse image search
      var formData = { photo: fs.createReadStream(req.file.path) };
      // A simple image storage so that the image is readable by Google Search
      request.post({ url: 'https://guoyunhe.me/demo/mecari/', formData: formData }, function (err, httpResponse, body) {
        if (err) {
          return console.error('Photo upload failed:', err);
        }
        var externalURL = 'https://guoyunhe.me/demo/mecari/' + req.file.filename;

        request.get({
          url: 'https://www.google.com/searchbyimage?hl=en-US&image_url=' + encodeURIComponent(externalURL),
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0'
          }
        }, function (err, httpResponse, body) {
          if (err) {
            return console.error('Image reverse search failed:', err);
          }

          result.downloaded = body.indexOf('All sizes') > 0;

          // 3. JPEG processing
          im.identify(['-format', '%Q', req.file.path], function (error, output) {
            if (error) return console.error(error);

            var quality = parseInt(output);
            console.log('quality: ' + output);
            if (quality % 5) {
              result.modified = true;
            }

            // TODO: machine learning
            res.send(result);
          });

        });
      });
    });
  } catch (error) {
    console.error("Metadata detection failed 2:" + error.message);
  }
});

module.exports = router;
