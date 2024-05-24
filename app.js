const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());
const { writeJson } = require('./utils');

const { index } = require('./controllers/index.js');
const { posts } = require('./controllers/posts.js');

app.get('/', index);
app.get('/posts', posts);

app.post('/posts', (req, res) => {
  writeJson('posts', [...post, req.body]);
  res.send('Post effettuato correttamente');
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
