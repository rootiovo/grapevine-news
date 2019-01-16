const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

app.set('port', process.env.PORT || 3001);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Index Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/public/index.html'),
   (err) => {
     if (err) {
       res.status(500).send(err);
     }
   });
});

app.get('/api/news', async (req, res) => {
  const newsAPIkey = 'b3d4b1b9e75145cbaa401b5a33452c56';
  const sources = req.query.sourceList;
  const data = await fetch(`https://newsapi.org/v2/top-headlines?sources=${sources}&sortBy=publishedAt&apiKey=${newsAPIkey}`);
  const news = await data.json();

  res.send(news.articles);
});

app.get('/api/news/category', async (req, res) => {
  const newsAPIkey = 'b3d4b1b9e75145cbaa401b5a33452c56';
  const category = req.query.category;
  const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsAPIkey}`);
  const news = await data.json();

  res.send(news.articles);
});

app.get('/api/news/search', async (req, res) => {
  const newsAPIkey = 'b3d4b1b9e75145cbaa401b5a33452c56';
  const queryString = req.query.queryString;
  const sources = req.query.sourceList;
  const data = await fetch(`https://newsapi.org/v2/everything?language=en&q=${queryString}&sources=${sources}&sortBy=publishedAt&apiKey=${newsAPIkey}`);
  const news = await data.json();

  res.send(news.articles);
});

app.get('/api/weather', async(req, res) => {
  const weatherAPIkey = 'a5fba080fd2d698d40c4ae5d11d15d5b';
  const lat = req.query.latitude ? req.query.latitude : '34.052235';
  const long = req.query.longitude ? req.query.longitude : '-118.243683';
  const response = await fetch(`https://api.darksky.net/forecast/${weatherAPIkey}/${lat},${long}`);
  const data = await response.json();

  res.send(data);
});

app.listen(app.get('port'));
