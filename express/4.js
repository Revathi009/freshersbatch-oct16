var express = require('express')
let app1 = express();
let app2 = express();
var strftime = require('strftime')

app1.get('/', function(req, res) {
    res.send('Hello World!')
});

app2.get('/time', function(req, res) {
    res.send(strftime('%Y-%M-%D, %T %H:%m:%s.%Z'));
});

app2.listen(8000, () => {;
console.log('Started server on 8000');
});

app1.listen(1337, () => {
    console.log("Started server on 1337");
  });