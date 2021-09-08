var concat = require('concat-stream');
var fs = require('fs');
    
var read = fs.createReadStream('array.txt');
var write = concat(function(data) {
    console.log(data);
});


