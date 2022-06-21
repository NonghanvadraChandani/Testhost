var mongoose = require('mongoose');
var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.listen(process.env.PORT, () => {
    console.log("server started");
})