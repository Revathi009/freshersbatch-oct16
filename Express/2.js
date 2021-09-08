var express = require('express');
var app = express();
const port = process.env.PORT || 8000;



app.get('/api/users', function(req, res) {
    var age = req.query.age;
  
    res.send('You were Born in 1984!');
  });
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);