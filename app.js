const express = require('express');
const app = express();
const port = 3000;

const { index } = require('./controllers/index.js');
const { post } = require('./controllers/post.js');

app.get('/', index);

app.get('/posts', (req, res) => {
  res.send('<ul><ul/>');
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
