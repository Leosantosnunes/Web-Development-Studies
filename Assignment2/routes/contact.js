var express = require('express');
var router = express.Router();
const fs = require('fs');


/* POST Customer information. */
router.post('/', (req, res, next) => {  
  const data = { "name":req.body.pname , 
                  "email":req.body.email, 
                  "message":req.body.newmessage };  
                   
  fs.readFile('data.json', 'utf8', (err, fileData) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data');
    }

    let jsonData = [];
    if (fileData) {
      jsonData = JSON.parse(fileData); 
    }
    
    jsonData.push(data); 

    const updatedData = JSON.stringify(jsonData);

    // Save the JSON data to a file
    fs.writeFile('data.json', updatedData, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error saving data');
      }

    res.redirect('/');      
    });
  });  
});

module.exports = router;
