import express from 'express';
import cors from 'cors';
import path from 'path';

let app = express();

//CORS
app.use(cors())
app.use(express.json())

//Static Files
app.use(express.static(__dirname + '/public'));

// Index Route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

//Server
app.listen(3000, () => {
    console.log('Listening on port 3000.')
});
