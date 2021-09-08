var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req, res) {

 

    fs.writeFile('message.txt', 'Hey, ho ! Let\'s go', function (err) {

        if (err) throw err;

        console.log('The file was saved!');

    });

 

});

server.listen(3000);

console.log('server running...');

