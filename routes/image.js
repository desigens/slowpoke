var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:timeout?', function(req, res, next) {
  setTimeout(function () {
    res.sendFile('image.jpg', {root: __dirname + '/../public/images/'});
  }, req.params.timeout !== undefined ? req.params.timeout : 3000);
});

module.exports = router;
