const express = require('express');
const path = require('path');
const app = express();
const port = 3080;

const bookController = require('./src/controller/BookController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/view'));
app.get('/', bookController.all);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))