let mongoose = require('mongoose');

//Create Model of Project
let projectModel = mongoose.Schema(
    {
        "ptitle" : String,
        "pdescription" : String,
        "pdeadline" : Date        
    },
    {
        collection: "project"
    }
);

module.exports = mongoose.model('Project', projectModel);