//create web server
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const comments = [];
app.use(cors());
app.use(bodyParser.json());
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send(comment);
});
app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});