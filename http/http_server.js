var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello everyone\n');
}).listen(1337, '127.0.0.1');

console.log('Server running ');

