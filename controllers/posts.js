const { readJson } = require('../utils');
const posts = readJson('posts');

module.exports = {
  posts: (req, res) => {
    res.format({
      html: () => {
        let html = '<main>';
        posts.forEach(({ titolo, contenuto, immagine, tags }) => {
          html += `
            <div>
              <h3>${titolo}</h3>
              <p>${contenuto}</p>
              <img style="width:100" src="${immagine}" alt="img-${titolo}"/>
              <h4>tags</h4>
              <ul>
          `;
          tags.forEach((i) => {
            html += `<li>${i}</li>`;
          });
          html += `</ul></div>`;
        });
        html += '</main>';
        res.send(html);
      },
      json: () => {
        res.json({
          data: posts,
        });
      },
    });
  },
};
