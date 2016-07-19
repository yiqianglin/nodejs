var http = require('http');
var util = require('util');
var querystring = require('querystring');

http.createServer(function(req, res){
    var post = ''
    req.on('data', function(chunk){
        post += chunk;
    }).on('end', function(){
        post += '\n modefied by server'
        post = querystring.parse(post);
        res.end(util.inspect(post))
    })
}).listen(3000)