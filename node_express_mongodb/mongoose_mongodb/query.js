var mongoose = require('mongoose');
require('./model');

var Users = mongoose.model('Users');

/*Users.find({}, function(err, docs){     //查询所有
    if(err){
        console.log('err: ', err);
        return;
    }
    console.log('result : ' , docs)
});
*/
Users.findOne({username: 'kuler'}, function(err, docs){     //查询条件
    if(err){
        console.log('err: ', err);
        return;
    }
    docs.job = 'hunting job';
    docs.save();
    console.log('result : ' , docs)
});