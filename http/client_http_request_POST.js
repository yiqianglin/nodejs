 //通过http.request发送POST请求的代码

var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    name: 'henix',
    age: '24',
    email: 'henix@qq.com',
    phone: '1862025704**'
});

var options = {
    host: '127.0.0.1',
    port: '3000',
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Lenth': contents.length
    }
};

var req = http.request(options, function(res){
    res.setEncoding('UTF-8');
    res.on('data', function(data){
        console.log(data)
    })
})

req.write(contents)
req.end()



