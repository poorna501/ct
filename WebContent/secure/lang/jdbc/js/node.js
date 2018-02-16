var http = require('http');

http.createServer(function (req, res) {
    req.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(4040);

