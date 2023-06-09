var express = require('express');
var router = express.Router();
const fs = require('fs');


/* POST Customer information. */
router.post('/', (req, res, next) => {  
  const data = { "name":req.body.pname , 
                  "email":req.body.email, 
                  "message":req.body.newmessage };
  


  
  let jsonData = [];

  jsonData.push(data);

  const updatedData = JSON.stringify(jsonData);

  // Save the JSON data to a file
  fs.writeFile('data.json', updatedData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      res.render('index');
      res.send('Data saved successfully');
    }
  });
});

module.exports = router;
