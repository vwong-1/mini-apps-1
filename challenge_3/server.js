const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var MongoClient = require('mongodb').MongoClient;

const files = path.join(__dirname, 'public');

app.use(express.static(files));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  console.log(req.body);
  res.status(201).send('posted');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});