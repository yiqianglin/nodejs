var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('my first server\n');

    var stringify={name:'henix',job:[]}
}).listen(8888);

console.log('server running at http://127.0.0.1:8888');