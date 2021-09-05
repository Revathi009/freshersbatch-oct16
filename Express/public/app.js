var express = require('express');
var app = express();

// app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/public', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
