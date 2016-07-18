//先拿到readable和writable的构造函数
var Readable = require('stream').Readable
var Writable = require('stream').Writable

//然后实例化
var readStream = new Readable();
var writeStream = new Writable();

//对可读流push数据
readStream.push('林');
readStream.push('小');
readStream.push('强\n');
readStream.push('null');

writeStream._write = function(chunk, encode, cb){
    console.log(chunk.toString());
    cb()
}

//最后使用pipie进行可读流和可写流的联系，这样就不用管内部是如何实现的
readStream.pipe(writeStream)