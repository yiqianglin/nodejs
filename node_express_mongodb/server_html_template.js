var express = require('express');
var mustache = require('mustache');

var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.render('home.ejs', {name:'henix'})
});

//下面可以接收url作为参数当成模板的参数
app.get('/request/:auth', function(req, res){
    var locals = {'name':'henix', 'auth': req.params['auth']};
    res.render('home.ejs', locals);
})

app.listen(3000)