//create web server using express
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
const comments = [];

// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
