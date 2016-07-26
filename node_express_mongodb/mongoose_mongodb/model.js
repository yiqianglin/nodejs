var mongoose = require('mongoose');
var uri = 'mongodb://username:password@hostname:port/databasename';     //一个标准的mongodb的资源定位符
uri = "mongodb://localhost/insuranceDB"
mongoose.connect(uri);

var usersSchema = new mongoose.Schema({     //用来定义无结构的mongodb的文档里面数据对应的结构
    username: String,
    job: String
});
mongoose.model('Users', usersSchema)        //创建model，并且指定其文档结构为usersSchema