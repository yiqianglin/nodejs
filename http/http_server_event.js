var http = require('http');

/*var server = new http.Server();
server
    .on('request', (req, res) => {
        console.log('requesting')
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('hello henix\n');
        res.end('\nend');
        console.log(this);      //{} 为什么是{}?
        server.close();         //浏览器关闭时候会触发
    })
    .on('connection', (req, res) => {
        console.log('connecting')
    })
    .on('close', (req, res) => {
        console.log('connection closed')
    })
    .listen(3000);

console.log('server running at localhost:3000')*/

/*http.createServer(function(req, res){
    console.log('requesting')
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('hello henix\n');
    res.end('\nend');
    console.log(this);      //这里的this就是server对象，为什么？
    this.close();         //浏览器关闭时候会触发
    })
    .on('connection', (req, res) => {
        console.log('connecting')
    })
    .on('close', (req, res) => {
        console.log('connection closed')
    })
    .listen(3000);*/

http.createServer(function(req, res){
    req.on('data', function(){
        console.log('dating')
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('hello henix\n');
        console.log(this);
        this.close(); 
    })
    .on('connection', () => {
        console.log('connecting')
    })
    .on('close', () => {
        console.log('connection closed')
    })
    .on('end', () => {
        console.log(this)      //这里的this也是server对象，为什么？
        res.write('hello henix\n');
        res.end('\nend');
    })
}).listen(3000);
console.log('server running at localhost:3000') 