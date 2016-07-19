var https = require('https');
var fs = require('fs');

var options = {     //通过文件系统来同步读取ssh的私钥和密钥
    key: fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cert.pem')
};

//获得了key和cert就可以运行本地的ssh的server
https
    .createServer(options, function(req, res){
        res.writeHead(200);
        res.end('Hello henix');
    })
    .listen(8090);