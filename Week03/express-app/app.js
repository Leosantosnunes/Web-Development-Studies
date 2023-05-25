

const http = require('http');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const shopRoutes = require('./routes/shop')

const adminRoutes = require('./routes/admin')

app.use(bodyParser.urlencoded({extend:false}));

app.use(adminRoutes)
app.use(shopRoutes)

app.listen(3000);