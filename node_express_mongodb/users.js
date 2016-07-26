var mongoose = require('mongoose');
var Schema = mongoose.Schema;   //创建模型
var usersSchema = new Schema({
    userid: String,
    name: String,
    job: String
});     //定义了一个类似于users集合的新模型，但是还没有和users集合关联

usersSchema.static = {
    find: function(cb){
        return this
        .find()
        .exec(cb)   //回调
    },
    findById: function(id, cb){
        return this
        .findOne({_id: id})
        .exec(cb)
    }
}

module.exports = usersSchema;

