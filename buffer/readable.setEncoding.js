var fs = require('fs');
var assert = require('assert')

var readable = fs.createReadStream('gbk.txt',{highWaterMark:2});
readable.setEncoding('utf8');
var data;
readable
    .on('data', (chunk) => {
        assert.equal(typeof chunk, 'string');
        console.log('got %d characters of string data', chunk.length);
        data += chunk;
    })
    .on('end', () =>{
        console.log(data);
    })


