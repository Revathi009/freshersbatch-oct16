var http = require('http')
var server = http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Success, I'm listening from port: 3000\n");
}));
server.listen(3000);