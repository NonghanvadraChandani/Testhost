var express = require('express');
var router = express.Router();
var Movie = require('./Models/Movie');

// router.get("/", (req, res) => {
//     res.sendFile("index.html", { root: __dirname });
// });

router.get('/movies', async(req, res) => {
    const iMovie = await Movie.find();
    res.send(iMovie);
})
module.exports = router;