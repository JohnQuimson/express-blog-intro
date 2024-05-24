const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const { index } = require('./controllers/index.js');
// const { posts } = require('./controllers/posts.js');

const posts = require('./controllers/posts.js');

app.get('/', index);
app.get('/posts', posts.get);

app.post('/posts', posts.post);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
