var mongoose = require('mongoose');
var express = require('express');
var bodyparser = require('body-parser');
var router = require('./route');

var app = express();
app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log("server started");
})