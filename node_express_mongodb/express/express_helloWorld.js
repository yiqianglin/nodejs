var express = require('express');
var app = express();
app.get('/index.html', function(req, res){
    res.send('hello world');
}).listen(1337)