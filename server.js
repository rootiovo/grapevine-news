const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const Parser = require("rss-parser");

let app = express()

app.set("port", process.env.PORT || 3001);

//Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Index Route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/api/news', async (req, res) => {
  const newsAPIkey= 'b3d4b1b9e75145cbaa401b5a33452c56'
  let filter = req.query.filter;
  let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIkey}`)
  let news = await data.json()

  if (filter) {
       news = news.articles.filter(article => {
          return article.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
          })
      }

  res.send(news.articles)
})

app.get('/api/weather', async(req, res) => {
  const weatherAPIkey = 'a5fba080fd2d698d40c4ae5d11d15d5b'
  let lat = req.query.latitude ? req.query.latitude : '34.052235'
  let long = req.query.longitude ? req.query.longitude : '-118.243683'
  let response = await fetch(`https://api.darksky.net/forecast/${weatherAPIkey}/${lat},${long}`)
  const data = await response.json()

  res.send(data)
})

//Server
app.listen(app.get("port"), () => {
    console.log(`Server running at: http://localhost:${app.get("port")}/`);
  });