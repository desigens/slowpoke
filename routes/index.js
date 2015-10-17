var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slowpoke resource', domain: req.get('host') });
});

module.exports = router;
