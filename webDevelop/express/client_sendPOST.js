var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    title: 'POST上去的标题',
    text: 'POST的text内容'
});

var opitons = {
    host: '127.0.0.1',
    port: '4040',
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': contents.length
    }
};

var req = http.request(opitons, function(res){
    res.setEncoding('utf-8');
    res.on('data', function(data){
        console.log(data)
    })
})

req.write(contents);
req.end();