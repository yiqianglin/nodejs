var iconv = require('iconv-lite');

var buffer = iconv.decode('林小强','GB2312');
console.log(buffer);        //报错？
buffer.toString('utf-8');