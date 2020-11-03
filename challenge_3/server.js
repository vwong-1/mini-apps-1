const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const assert = require('assert');
const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017/';
const dbName = 'checkouts';

var ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  db = client.db(dbName);
});

const files = path.join(__dirname, 'public');

app.use(express.static(files));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  db.collection('users').insertOne(req.body, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json(result);
    }
  });
});

app.put('/user', (req, res) => {
  let id = new ObjectId(req.body.id);
  delete req.body['id'];
  db.collection('users').findOneAndUpdate({_id : id}, {$set: req.body}, (err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json(result);
    }
  });
});

app.get('/user', (req, res) => {
  let id = new ObjectId(req.body.id);
  console.log(id);
  db.collection('users').find().sort({_id: -1}).limit(1).toArray((err, result) => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log(result);
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});