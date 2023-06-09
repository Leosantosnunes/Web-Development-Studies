var express = require('express');
var router = express.Router();

/* GET projectone original size page. */
router.get('/projectone', function(req, res, next) {
  res.render('projects/projectone');
});

/* GET about page. */
router.get('/projecttwo', function(req, res, next) {
  res.render('projects/projecttwo'); 
});

/* GET contact page. */
router.get('/projectthree', function(req, res, next) {
  res.render('projects/projectthree'); 
});

/* GET contact page. */
router.get('/projectfour', function(req, res, next) {
  res.render('projects/projectfour'); 
});



module.exports = router;
