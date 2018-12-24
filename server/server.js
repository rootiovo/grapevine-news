import express from 'express';
import cors from 'cors';
import path from 'path';
import jsonfile from 'jsonfile';

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
  let feed = await parser.parseURL('https://www.theverge.com/rss/index.xml');

  res.send(feed.items);
});

//Server
app.listen(3000, () => {
    console.log('Listening on port 3000.')
});
