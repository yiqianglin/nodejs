var mongoose = require('mongoose');
require('./model');

var Users = mongoose.model('Users');

var condition = {   //查询的复杂条件
    $or: [          //如果多个同级的或条件
        {username: '林小强'},
        {username: 'kuler'},
        {job: 'finding job'}
    ]
};
Users.find(condition, function(err, docs){     //查询条件
    if(err){
        console.log('err: ', err);
        return;
    }
    console.log('result : ' , docs)
});