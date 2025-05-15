var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Users</h1>');
});

router.get('/signin', (req, res) => {
  res.send(`<h1>Signin`)
});

router.get('/signup', (req, res) => {
  res.send('<h1>Signup</h1>');
});

router.get('/:userid', (req, res) => {
  var { userid } = req.params;
  res.send(`<h1>Welcome, User ${userid}!</h1>`);
});

module.exports = router;
