// var express = require('express');
// var app = express();

// app.set('view engine', 'ejs');

// app.get('/form', function(req,res){
//     res.render('profile',{qs: req.query});
// });

// app.listen(3000);
// console.log('server started');

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

var urlencodedParser = bodyparser.urlencoded({ extended: false });

// app.post('/form', urlencodedParser, function (req, res) {
//     res.send('welcome, ' + req.body.username)
//   })

app.get('/form', function(req, res){
    res.send('profile',{qs:req.query});
});

app.post('/form', urlencodedParser, function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2] || 3000)