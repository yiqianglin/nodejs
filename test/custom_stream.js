var stream =  require('stream');
var util = require('util');

//自己封装一个ReadStream构造函数
function ReadStream(){
    stream.Readable.call(this)  //改变上下文，让ReadStream能调用stream.Readable的方法
}
util.inherits(ReadStream, stream.Readable);  //让ReadStream继承stream.Readable的原型
ReadStream.prototype._read = function(){
    this.push('I ');
    this.push('am ');
    this.push('Henix');
    this.push(null);
}
//封装一个可写流的构造函数
function WriteStream(){
    stream.Writable.call(this);
    this._cached = new Buffer('');
}
util.inherits(WriteStream, stream.Writable)
WriteStream.prototype._write = function(chunk, encode, callback){
    console.log(chunk.toString())
    callback && callback()
}
function TransformStream(){
    stream.Transform.call(this);
}
util.inherits(TransformStream, stream.Transform)
TransformStream.prototype._transform = function(chunk, encode, callback){
    this.push(chunk);
    callback && callback();
}
TransformStream.prototype._flush = function(callback){
    this.push('Oh my god!')
}

try{
    console.log(stream.Readable)
    console.log(ReadStream);
var rs = new ReadStream();
var ws = new WriteStream();
var ts = new TransformStream();
rs.pipe(ts).pipe(ws);
}catch(e){
    console.log(e)
}