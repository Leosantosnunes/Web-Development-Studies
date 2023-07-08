var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Project = require('../models/project');
const project = require('../models/project');

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

router.post('/newProject', (req, res, next) => { 
  //getting data from form 
  let newProject = Project({"ptitle":req.body.ptitle, 
                  "pdescription":req.body.pdescription, 
                  "pdeadline": req.body.pdeadline});  

  //insert data into the mongoDB
  Project.create(newProject);
  res.redirect('/');
});

//Delete Code in the view and MongoDB
router.get("/delete/:id",async (req,res,next) => {
  let id = req.params.id;
  console.log(id);

  ProjDeleted = await Project.deleteOne({_id: id})
  //console.log(await Project.findById({_id: id}));
  res.redirect('/projects')  
});


module.exports = router;
