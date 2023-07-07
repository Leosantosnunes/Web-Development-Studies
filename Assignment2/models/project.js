let mongoose = require('mongoose');

//Create Model of Project
let projectModel = mongoose.Schema(
    {
        "ptitle" : String,
        "pdescription" : String,
        "pdeadline" : Date        
    },
    {
        collection: "OngoingProjects"
    }
);

module.exports = mongoose.model('Project', projectModel);