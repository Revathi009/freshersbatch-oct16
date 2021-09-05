// var express = require('express');
// var app = express();

// app.get('/',function(req,res){
//     res.send('Hello World');
// });

// app.listen(3000);


var express = require('express');
var app = express();

// app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/public', function(req, res){
    res.sendFile('/index.html', { root: path.join(__dirname, '../public/index.html')});
});

app.listen(3000);