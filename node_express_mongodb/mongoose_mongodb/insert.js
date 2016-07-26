var mongoose = require('mongoose');
require('./model.js');

var Users = mongoose.model('Users');
var users = new Users({
    username: 'jinx',
    job:'H5engineer'
});
users.job = 'student';

users.save(function(err){
    console.log('save status:', err ? 'failed' : 'succeed')
})