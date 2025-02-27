//create web server
const express = require('express');
const app = express();

//parse request body
app.use(express.json());

//serve static files
app.use(express.static('public'));

//serve comments
const comments = [];
app.get('/comments', (req, res) => {
  res.json(comments);
});

//add comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

//start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});