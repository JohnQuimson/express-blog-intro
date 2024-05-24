const path = require('path');
const fs = require('fs');

const getPost = (callback) => {
  try {
    const posts = readJson('posts');
    callback(null, posts);
  } catch (err) {
    callback(err, null);
  }
};

const readJson = (fileName) => {
  const filePath = path.join(__dirname, `${fileName}.json`);
  const json = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(json);
};

const writeJson = (fileName, data) => {
  const filePath = path.join(__dirname, `${fileName}.json`);
  const json = JSON.stringify(data);
  fs.writeFileSync(filePath, json);
};

module.exports = {
  getPost,
  readJson,
  writeJson,
};
