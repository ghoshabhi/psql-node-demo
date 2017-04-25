var pg = require('pg');
var express = require('express');
var app = express();

app.get('/db', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM demo_table', function(err, result) {
      done();
      if (err) {
        console.error(err);
        response.send("There was some error: " + err);
      } else {
        response.render('pages/db', { results: result.rows});
      }
    });
  });
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`App Running on ${port}...`)
});
