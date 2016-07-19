var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.all('/',function(req, res){
    res.send(req.body.title + req.body.text + " express server")
});
app.listen(4040);

