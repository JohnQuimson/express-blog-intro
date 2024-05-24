const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Benvenuto nel mio blog!<h1/>');
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
