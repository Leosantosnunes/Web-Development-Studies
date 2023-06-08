var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' }); 
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' }); 
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' }); 
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project' }); 
});

/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service' }); 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); 
});

module.exports = router;
