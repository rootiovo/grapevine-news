import express from 'express';
import cors from 'cors';
import path from 'path';

const port = process.env.PORT || 3000;
let app = express();

//CORS
app.use(cors())
app.use(express.json())

//Static Files
app.use(express.static(__dirname + '/public'));

// Index Route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

//News
app.get('/api/news', async (req, res) => {
  let Parser = require('rss-parser');
  let parser = new Parser();
  let filter = req.query.filter;
  let articles = await parser.parseURL('https://www.theverge.com/rss/index.xml');

  if (filter) {
    articles = articles.filter(article => {
      return article.title.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
  }

  res.send(articles.items);
});

//Server
app.listen(port, () => {
    console.log('Listening on port' + port);
});
