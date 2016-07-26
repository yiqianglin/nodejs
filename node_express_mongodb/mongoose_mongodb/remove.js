var mongoose = require('mongoose');
require('./model');

var Users =  mongoose.model('Users');
Users.findOne({job:'student'}, function(err, docs){
    if(err){
        console.log('err: ', err);
        return;
    }
    if(docs){
        docs.remove();
    }
})