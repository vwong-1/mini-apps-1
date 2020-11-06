const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const public = path.join(__dirname, './public')

app.use(express.static(public));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});