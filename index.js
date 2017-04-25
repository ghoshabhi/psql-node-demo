var pg = require('pg');

app.get('/db', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM demo_table', function(err, result) {
      done();
      if (err) {
        console.error(err);
        response.send("There was some error: " + err);
      } else {
        response.render('/views/pages/db', { results: results.rows});
      }
    });
  });
});
