var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World 1\n');
}).listen(8085);
