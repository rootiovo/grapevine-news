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

//News
app.get('/api/news', async (req, res) => {
  let parser = new Parser({
    customFields:{
      item:  [
        ['media:content', 'image']
      ]
    }
  })

  let filter = req.query.filter;
  let articles = await parser.parseURL('http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml')

  if (filter) {
    articles = articles.filter(article => {
      return article.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
      })
  }

  res.send(articles.items)
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