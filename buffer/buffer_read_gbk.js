var fs = require('fs');

var rs = fs.createReadStream('gbk.txt',{highWaterMark:11});

var data='';
rs.on('data', function(chunk){
    data += chunk;
}).on('end', function(){
    console.log(data);
});

