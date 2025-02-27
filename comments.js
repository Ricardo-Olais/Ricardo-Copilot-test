//create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000, function () {
    console.log('Server is running at http://localhost:3000');
});
//use body-parser module to parse data from request body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//store comments in an array
var comments = [];
app.get('/comments', function (req, res) {
    res.send(comments);
});
app.post('/comments', function (req, res) {
    var comment = req.body;
    comments.push(comment);
    res.send('Add comment successfully');
});