var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Book = mongoose.model('Book');

/* GET book page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/findAll', function(req, res, next) {
    Book.find({}, function(err, docs){
        if(err){
            console.log("err : ", err)
            return next();
        }
        console.log("result : ", docs);
        res.json(docs);
        return next();
    })
});

module.exports = router;
