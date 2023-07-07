var express = require('express');
var router = express.Router();

/* GET projectone original size page. */
router.get('/projectone', function(req, res, next) {
  res.render('projects/projectone');
});

/* GET projecttwo original size page. */
router.get('/projecttwo', function(req, res, next) {
  res.render('projects/projecttwo'); 
});

/* GET projectthree original size page. */
router.get('/projectthree', function(req, res, next) {
  res.render('projects/projectthree'); 
});

/* GET projectfour original size page. */
router.get('/projectfour', function(req, res, next) {
  res.render('projects/projectfour'); 
});

/* GET new project form page. */
router.get('/newProject', function(req, res, next) {
  res.render('projects/newProject'); 
});

module.exports = router;
