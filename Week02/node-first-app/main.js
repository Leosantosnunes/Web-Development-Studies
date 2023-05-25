//Core Module: fs

// const fs = require('fs'); 
// fs.writeFileSync("message.txt","Krunal");

//Code Module: http

const http = require('http');

const server = http.createServer((req,res) => {  
    console.log(req.url,req.method);
    const url = req.url;
    if(url === '/google'){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><title>My first Node App</title></head>")
        res.write("<body><h1>Go to google web page...</h1></body>")
        res.write("</html>")
        res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>My first Node App</title></head>")
    res.write("<body><h1>Good Night...This is my last example....</h1></body>")
    res.write("</html>")
    res.end();
    });

server.listen(3000) 