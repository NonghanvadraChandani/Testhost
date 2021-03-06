var mongoose = require('mongoose');
var express = require('express');
var bodyparser = require('body-parser');
var router = require('./route');

mongoose.connect("mongodb+srv://chandani:C3214051@cluster0.rxlk5we.mongodb.net/Movies?retryWrites=true&w=majority").then(() => {
    var app = express();

    app.use(express.json())
    app.use(bodyparser.urlencoded({ extended: false }))

    app.use('/api', router);

    app.listen(process.env.PORT || 3000, () => {
        console.log("server started");
    })
}).catch((err) => {
    console.log(err);
})