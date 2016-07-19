var stream =  require('stream');
var util = require('util');

//自己封装一个ReadStream构造函数
function ReadStream(){
    stream.Readable.call(this)  //改变上下文，让ReadStream能调用stream.Readable的方法
}

util.inherts(ReadStream, stream.Readable);  //让ReadStream继承stream.Readable的原型
