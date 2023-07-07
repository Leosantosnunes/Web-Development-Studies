let mongoose = require('mongoose');

//Create Model of Product
let employeesModel = mongoose.Schema(
    {
        "name" : String,
        "address" : String,
        "contact" : Number
    },
    {
        collection: "employees"
    }
);

module.exports = mongoose.model('Employees', employeesModel);