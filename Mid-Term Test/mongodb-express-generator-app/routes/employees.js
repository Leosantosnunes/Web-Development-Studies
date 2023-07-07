let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Employee = require('../models/employee');
const employee = require('../models/employee');

//Manage routes
router.get('/', (req, res, next) => {
    Employee.find((err, employeesList) => {
        if(err){
            return console.error(err);
        }else{
            //console.log(employeeList);
            res.render('employees/list', {title: 'Employee Info', EmployeesList: employeesList})
        }
    });
});

// to open add employee page
router.get('/add', (req, res, next) => {
    res.render('employees/add', {title: 'Add Employee'})
});

// insert employee data into mongoDB collection
router.post('/add', (req, res, next) => {
    //getting data from form
    let newEmployee = Employee({
        "name": req.body.pname,
        "address": req.body.padress,
        "contact": req.body.contact
    });

    //insert data into the mongoDB
    Employee.create(newEmployee, (err, Employee) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/employees')
        }
    });
});

//Delete Code in the view and MongoDB
router.get("/delete/:id",(req,res,next) => {
    let id = req.params.id;
    console.log(id);

    Employee.deleteOne({_id: id},(err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            console.log(id);
            res.redirect('/employees')
        }
    })
});

module.exports = router;