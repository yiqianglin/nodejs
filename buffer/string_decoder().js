var fs = require('fs');
var iconv = require('iconv-lite')
var assert = require('assert');

var res = fs.createReadStream('gbk.txt',{highWaterMark:2});
var chunks = [];
var size = 0;
res
    .on('data', (chunk)=> {
        chunks.push(chunk);
        size += chunk.length;
    })
    .on('end', ()=> {
        var buf = Buffer.concat(chunks, size);
        var str = iconv.decode(buf, 'utf-8');
        console.log(str)
    })
