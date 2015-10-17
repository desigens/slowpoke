var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:timeout', function(req, res, next) {
  setTimeout(function () {
    res.sendFile('image.jpg', {root: __dirname + '/../public/'});
  }, req.params.timeout);
});

module.exports = router;
