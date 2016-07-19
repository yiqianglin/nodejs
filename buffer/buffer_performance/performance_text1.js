var http = require('http');
var helloworld = '';

var http = require('http');

for( var i = 0; i < 1024*10; i++){
    helloworld +='a';
}

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(helloworld);
}).listen(2001)