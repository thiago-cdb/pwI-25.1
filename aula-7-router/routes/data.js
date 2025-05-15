var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send('<h1>Data</h1>');
});

module.exports = router;
