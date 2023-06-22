var express = require('express');
var router = express.Router();





// /players
router.get('/', function(req, res, next) {
  res.render('players/index');
});




















module.exports = router;
