const express = require('express');
const app = express();
const port = 3080;

const bookPresenter = require('./src/presenter/BookPresenter');

app.get('/', async (req, res) => {
  const content = await bookPresenter.all();
  res.status(200);
  return res.send(content);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))